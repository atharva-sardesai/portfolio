import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-4 md:py-10">
      <div className="space-y-3 md:space-y-6">
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-xl md:text-4xl font-bold tracking-tight">Get in touch</h1>
          <p className="text-sm md:text-xl text-muted-foreground">
            For questions about my writing or professional conversations — reach out via LinkedIn or the form below.
          </p>
        </div>

        <div className="grid gap-3 md:gap-6 md:grid-cols-2">
          <Card className="w-full">
            <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold">LinkedIn</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  The best place to reach out about writing, enterprise security, or professional conversations.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full text-sm md:text-base">
                <Link href="https://www.linkedin.com/in/atharvasardesai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                  View LinkedIn Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold">Send a message</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  Use the form below for questions or professional notes.
                </p>
              </div>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
