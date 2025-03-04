import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <ShieldAlert className="h-24 w-24 text-primary" />
            <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center">
              404
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Oops! You've been hacked by a 404 error</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for has been compromised or doesn't exist. Let's get you back to a secure location.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Report This Issue</Link>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground border-t pt-4 mt-4">
          <p>Security Tip: Always verify URLs before entering sensitive information.</p>
        </div>
      </div>
    </div>
  )
}

