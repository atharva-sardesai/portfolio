"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Download } from "lucide-react"
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
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Connect with Me</h1>
          <p className="text-xl text-muted-foreground">Let's Collaborate to Build a Secure Future!</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have a question, project idea, or just want to connect? Fill out the form and I'll get back to you as
                  soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={6}
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Connect Directly</h2>
                <p className="text-muted-foreground">
                  Prefer to connect through social media? Reach out through any of these channels.
                </p>
                <div className="space-y-4">
                  <Link
                    href="https://www.linkedin.com/in/cyberwithatharva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">Connect professionally</p>
                    </div>
                  </Link>
                  <Link
                    href="https://x.com/NullSecures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Twitter className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">X (Twitter)</h3>
                      <p className="text-sm text-muted-foreground">Follow for updates</p>
                    </div>
                  </Link>
                  <Link
                    href="https://medium.com/@cyberwithatharva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Medium</h3>
                      <p className="text-sm text-muted-foreground">Read my articles</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">For Recruiters</h2>
                <p className="text-muted-foreground">
                  Interested in my professional background? Download my resume for a comprehensive overview of my skills
                  and experience.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/Atharva_Sardesai_Resume.pdf" download className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Learning Interests</h2>
                <p className="text-muted-foreground">
                  I'm particularly interested in learning more about and potentially collaborating on projects related
                  to:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Cloud security architecture and implementation in AWS environments</li>
                  <li>Integrating security practices into DevOps workflows (DevSecOps)</li>
                  <li>Building and improving security operations processes and tools</li>
                  <li>Exploring defensive security techniques and incident response</li>
                  <li>Developing skills in security automation and scripting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

