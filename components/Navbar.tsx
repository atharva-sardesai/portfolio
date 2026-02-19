import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Cyber with Atharva Logo"
              width={180}
              height={36}
              className="h-8 w-auto sm:h-9 md:h-10 object-contain"
              sizes="(max-width: 640px) 8rem, (max-width: 768px) 9rem, 10rem"
              priority
              quality={100}
            />
          </Link>
          <div className="flex items-center justify-end">
            <nav className="flex items-center space-x-1 md:space-x-2 pr-0">
              <Button asChild variant="ghost" className="text-xs md:text-base px-2 md:px-4">
                <Link href="/blog">Insights</Link>
              </Button>
              <Button asChild variant="ghost" className="text-xs md:text-base px-2 md:px-4">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
} 