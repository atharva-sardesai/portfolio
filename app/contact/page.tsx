"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Download, Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/contact-form"

// Note: Metadata export doesn't work with "use client" components
// SEO metadata is handled in the root layout

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container px-4 md:px-6 py-4 md:py-10">
      <div className="space-y-3 md:space-y-6">
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-xl md:text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-sm md:text-xl text-muted-foreground">Let's connect and explore opportunities together</p>
        </div>

        <div className="grid gap-3 md:gap-6 md:grid-cols-2">
          <Card className="w-full">
            <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold">For Recruiters</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  Looking for a cybersecurity professional? Download my resume or connect on LinkedIn.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full text-sm md:text-base">
                  <Link href="/Atharva_Resume.pdf" download>
                    <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full text-sm md:text-base">
                  <Link href="https://www.linkedin.com/in/cyberwithatharva/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    View LinkedIn Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold">For Collaboration</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  Interested in collaborating on cybersecurity projects or research? Let's connect!
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full text-sm md:text-base">
                  <Link href="mailto:cyberwithatharva@gmail.com">
                    <Mail className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Send Email
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full text-sm md:text-base">
                  <Link href="https://www.linkedin.com/in/cyberwithatharva/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 md:gap-6">
          <Card className="w-full">
            <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold">Send Me a Message</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  Have a question or want to discuss something? Fill out the form below.
                </p>
              </div>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="pt-3 md:pt-6">
          <Card className="w-full">
            <CardContent className="p-3 md:p-6 space-y-3 md:space-y-4">
              <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-2xl font-bold">Additional Contact Information</h2>
                <p className="text-xs md:text-base text-muted-foreground">
                  You can also find me on these platforms:
                </p>
              </div>
              <ul className="space-y-2 text-xs md:text-base">
                <li>
                  <Link
                    href="https://medium.com/@cyberwithatharva"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/NullSecures"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter Profile
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

