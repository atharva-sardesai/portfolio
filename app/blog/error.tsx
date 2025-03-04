'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog error:', error)
  }, [error])

  return (
    <div className="container py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-4">
        {error.message || 'Failed to load blog posts. Please try again later.'}
      </p>
      <Button
        onClick={() => reset()}
        variant="outline"
      >
        Try again
      </Button>
    </div>
  )
} 