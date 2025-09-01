import { RadioIcon, XIcon } from "lucide-react"

import { Button } from './button';

interface Comp296Props {
  onClose: () => void;
}

export default function Component({ onClose }: Comp296Props) {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="relative flex w-full max-w-xs flex-col gap-2 rounded-lg border bg-background p-4 shadow-lg sm:max-w-md md:max-w-lg">
      <div className="flex items-center gap-4">
        
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <RadioIcon className="h-5 w-5" />
        </div>

        <div className="grid gap-1">
          <p className="text-sm font-medium">New Feature is coming!</p>
          <p className="text-sm text-muted-foreground">Now, and you chat with my personal assistant.</p>
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
    </div>
  )
}
