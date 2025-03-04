import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CertificationsPage() {
  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Certifications</h1>
          <p className="text-xl text-muted-foreground">Professional qualifications and continuous learning journey</p>
        </div>

        <section className="py-8 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">Current Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Badge>Cloud Security</Badge>
                  <div className="relative h-12 w-12">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="AWS Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">AWS Certified Security - Specialty</h3>
                <p className="text-muted-foreground">
                  Demonstrates expertise in security best practices for AWS cloud environments, including data
                  protection, infrastructure security, and identity management.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Issued: Jan 2023</span>
                  <span>Valid until: Jan 2026</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Badge>Penetration Testing</Badge>
                  <div className="relative h-12 w-12">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="CompTIA Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">CompTIA PenTest+</h3>
                <p className="text-muted-foreground">
                  Certification focused on penetration testing and vulnerability assessment skills, covering planning,
                  scoping, and managing weaknesses.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Issued: Mar 2023</span>
                  <span>Valid until: Mar 2026</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Badge>Security Fundamentals</Badge>
                  <div className="relative h-12 w-12">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Microsoft Certification"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Microsoft Security, Compliance, and Identity Fundamentals</h3>
                <p className="text-muted-foreground">
                  Covers concepts of security, compliance, and identity across cloud-based and related Microsoft
                  services.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Issued: Jun 2023</span>
                  <span>No expiration</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-8 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">Certification Roadmap</h2>
          <p className="text-muted-foreground">My planned journey for expanding expertise in cybersecurity domains</p>

          <div className="relative border-l-2 border-primary/30 pl-6 space-y-10">
            <div className="relative">
              <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">AWS Solutions Architect - Professional</h3>
                  <Badge variant="outline">Q2 2024</Badge>
                </div>
                <p className="text-muted-foreground">
                  Advanced certification for designing distributed systems on AWS, with a focus on security
                  architecture.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">AZ-500: Microsoft Azure Security Technologies</h3>
                  <Badge variant="outline">Q3 2024</Badge>
                </div>
                <p className="text-muted-foreground">
                  Specialized certification for implementing security controls and threat protection on Microsoft Azure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">Certified Kubernetes Security Specialist (CKS)</h3>
                  <Badge variant="outline">Q4 2024</Badge>
                </div>
                <p className="text-muted-foreground">
                  Advanced certification focusing on securing container-based applications and Kubernetes platforms.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">CISSP: Certified Information Systems Security Professional</h3>
                  <Badge variant="outline">2025</Badge>
                </div>
                <p className="text-muted-foreground">
                  Industry-leading certification covering a broad range of security domains and management practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Additional Training</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Practical Ethical Hacking</h3>
                <p className="text-muted-foreground">
                  Comprehensive course covering real-world penetration testing methodologies and tools.
                </p>
                <p className="text-sm text-muted-foreground">TCM Security Academy</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Cloud Security Engineering</h3>
                <p className="text-muted-foreground">
                  Advanced training on implementing security controls across multi-cloud environments.
                </p>
                <p className="text-sm text-muted-foreground">SANS Institute</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="py-8 flex justify-center">
          <Button asChild>
            <Link href="/contact">Discuss Collaboration Opportunities</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

