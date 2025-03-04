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
    <div className="container py-6 md:py-10">
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-base md:text-xl text-muted-foreground">Let's connect and explore opportunities together</p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">For Recruiters</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Looking for a cybersecurity professional? Download my resume or connect on LinkedIn.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link href="/Atharva_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://www.linkedin.com/in/cyberwithatharva/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    View LinkedIn Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">For Collaboration</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Interested in collaborating on cybersecurity projects or research? Let's connect!
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link href="mailto:cyberwithatharva@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://x.com/NullSecures" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" />
                    Connect on X
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="pt-4 md:pt-6">
          <Card>
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold">Additional Contact Information</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  You can also find me on these platforms:
                </p>
              </div>
              <ul className="space-y-2 text-sm md:text-base">
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
                    href="https://github.com/atharva-sardesai"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
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

