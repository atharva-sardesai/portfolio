import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 shrink-0">
            <span className="text-base font-semibold tracking-normal sm:text-lg">Atharva Sardesai</span>
          </Link>
          <div className="flex items-center justify-end">
            <nav className="flex items-center space-x-1 md:space-x-2 pr-0">
              <Button asChild variant="ghost" className="text-xs md:text-base px-2 md:px-4">
                <Link href="/blog">Writing</Link>
              </Button>
              <Button asChild variant="ghost" className="text-xs md:text-base px-2 md:px-4">
                <Link href="/#about">About</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
} 
