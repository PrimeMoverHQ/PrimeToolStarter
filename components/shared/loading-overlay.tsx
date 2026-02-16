import { Loader2 } from 'lucide-react'

interface LoadingOverlayProps {
  message?: string
}

export function LoadingOverlay({ message }: LoadingOverlayProps) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 rounded-md bg-background/80 backdrop-blur-sm">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      {message && (
        <p className="text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  )
}
