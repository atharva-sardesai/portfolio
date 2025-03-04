import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Cyber with Atharva</span>
        </Link>
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/certifications">Certifications</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  )
} 