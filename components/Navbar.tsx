import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center -ml-20">
          <div className="relative w-[380px] h-[56px]">
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
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/blog">Blog</Link>
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