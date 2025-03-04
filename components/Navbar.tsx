import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background py-2 md:py-3">
      <div className="container flex h-14 md:h-16 items-center px-0">
        <Link href="/" className="flex items-center -ml-1 md:-ml-20">
          <div className="relative w-[160px] md:w-[380px] h-[32px] md:h-[56px]">
            <Image
              src="/images/logo.png"
              alt="Cyber with Atharva Logo"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-1 md:space-x-2 pr-4">
            <Button asChild variant="ghost" className="text-xs md:text-base px-2 md:px-4">
              <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild variant="ghost" className="text-xs md:text-base px-2 md:px-4">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  )
} 