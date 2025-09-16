import { CircleAlertIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function DevelopmentAlert() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Check if user has already seen the alert in this session
    const hasSeenAlert = sessionStorage.getItem('dev-alert-seen')
    
    if (!hasSeenAlert) {
      // Show alert after a brief delay to allow page to load
      const timer = setTimeout(() => {
        setOpen(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
    // Mark alert as seen for this session
    sessionStorage.setItem('dev-alert-seen', 'true')
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-orange-500 bg-orange-500/20"
            aria-hidden="true"
          >
            <CircleAlertIcon className="text-orange-500" size={16} />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('dev.alert.title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('dev.alert.description')}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleClose}>
            {t('dev.alert.understood')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
