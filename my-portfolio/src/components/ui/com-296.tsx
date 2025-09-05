// Enhanced comp-296.tsx (Modified, not replaced)
import { RadioIcon, XIcon, Music } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from './button';

interface Comp296Props {
  onClose: () => void;
  // New optional props for music functionality
  isMusicNotification?: boolean;
  songTitle?: string;
  artist?: string;
  isPlaying?: boolean;
}

export default function Component({ 
  onClose, 
  isMusicNotification = false,
  songTitle = "Paranoid",
  artist = "Just Raw - Instrumental",
  isPlaying = false
}: Comp296Props) {
  
  // Dynamic content based on notification type
  const notificationContent = {
    icon: isMusicNotification ? Music : RadioIcon,
    title: isMusicNotification ? songTitle : "Paranoid",
    description: isMusicNotification ? artist : "Just Raw - Instrumental",
    iconAnimation: isMusicNotification && isPlaying
  };

  return (
    <div className="fixed top-28 right-6 z-50">
      <motion.div 
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex w-full max-w-xs flex-col gap-2 rounded-lg border bg-background/95 backdrop-blur-md p-4 shadow-xl sm:max-w-md md:max-w-lg"
      >
        <div className="flex items-center gap-4">
          
          <motion.div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-accent-primary/20"
            animate={notificationContent.iconAnimation ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
            transition={notificationContent.iconAnimation ? {
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse"
            } : {}}
            aria-hidden="true"
          >
            <notificationContent.icon className={`h-5 w-5 ${
              isMusicNotification ? 'text-accent-primary' : ''
            }`} />
          </motion.div>

          <div className="grid gap-1">
            <p className="text-sm font-medium text-white">{notificationContent.title}</p>
            <p className="text-sm text-muted-foreground">{notificationContent.description}</p>
          </div>
          
          <Button
            variant="ghost"
            className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
            aria-label="Close notification"
            onClick={onClose}
          >
            <XIcon
              size={16}
              className="opacity-60 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}