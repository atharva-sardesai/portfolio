import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Projects & Experience</h1>
          <p className="text-xl text-muted-foreground">
            Showcasing my work in cybersecurity and professional experience
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="py-6">
            <div className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">Cloud Security Monitoring Dashboard</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A simple dashboard to visualize security alerts and metrics from AWS CloudWatch, helping to
                      monitor the security posture of cloud resources.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">Streamlit</Badge>
                      <Badge variant="outline">Cloud Security</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Integration with AWS CloudWatch API</li>
                        <li>Visualization of security group changes</li>
                        <li>Display of failed login attempts</li>
                        <li>Basic alerting for suspicious activities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">DevSecOps CI/CD Integration</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A basic GitHub Actions workflow that integrates security scanning tools into a CI/CD pipeline for
                      automated vulnerability detection in a sample application.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">GitHub Actions</Badge>
                      <Badge variant="outline">OWASP Dependency-Check</Badge>
                      <Badge variant="outline">Trivy</Badge>
                      <Badge variant="outline">DevSecOps</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Automated dependency scanning</li>
                        <li>Container image security scanning</li>
                        <li>Basic secret detection</li>
                        <li>Integration with GitHub Security tab</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">Security Operations Toolkit</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A collection of scripts and tools to assist in common security operations tasks, aimed at learning
                      and practicing blue team activities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Bash</Badge>
                      <Badge variant="outline">ELK Stack</Badge>
                      <Badge variant="outline">Blue Teaming</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Log parsing and analysis scripts</li>
                        <li>Basic intrusion detection system rules</li>
                        <li>Automated reporting of security events</li>
                        <li>Integration with open-source threat intelligence feeds</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="experience" className="py-6">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Cybersecurity Intern</h3>
                        <p className="text-muted-foreground">TechDefend Solutions</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>May 2023 - Aug 2023</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Worked as a cybersecurity intern in a growing security firm, contributing to projects related to
                        cloud security and DevSecOps practices.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>Assisted in implementing and monitoring cloud security controls in AWS environments</li>
                          <li>Contributed to the development of security scanning scripts for CI/CD pipelines</li>
                          <li>Participated in security assessments of cloud-based applications</li>
                          <li>Helped create documentation for security best practices in cloud environments</li>
                          <li>Engaged in basic incident response simulations and security operations tasks</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">AWS CloudTrail</Badge>
                          <Badge variant="outline">AWS Config</Badge>
                          <Badge variant="outline">GitHub Actions</Badge>
                          <Badge variant="outline">Docker</Badge>
                          <Badge variant="outline">OWASP ZAP</Badge>
                          <Badge variant="outline">ELK Stack</Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Learnings:</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>Gained practical experience in monitoring and securing cloud environments</li>
                          <li>Developed a basic understanding of integrating security into CI/CD workflows</li>
                          <li>Improved skills in scripting for security automation and tool development</li>
                          <li>Enhanced knowledge of security operations and incident response processes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Security Research Assistant</h3>
                        <p className="text-muted-foreground">University Cybersecurity Lab</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>Jan 2023 - Apr 2023</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Worked as a research assistant in the university's cybersecurity lab, focusing on cloud security
                        and secure DevOps practices.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>Assisted in research on secure cloud configuration benchmarks</li>
                          <li>Developed and tested security controls for containerized applications</li>
                          <li>Contributed to a paper on DevSecOps implementation challenges</li>
                          <li>Conducted literature reviews on emerging cybersecurity threats</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Docker</Badge>
                          <Badge variant="outline">Kubernetes</Badge>
                          <Badge variant="outline">Terraform</Badge>
                          <Badge variant="outline">AWS CloudFormation</Badge>
                          <Badge variant="outline">GitHub Actions</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Cybersecurity Learning Journey</h3>
                        <p className="text-muted-foreground">Skill Development Timeline</p>
                      </div>
                    </div>
                    <div className="relative border-l-2 border-primary/30 pl-6 space-y-10">
                      <div className="relative">
                        <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-5 w-5 rounded-full bg-primary"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold">Introduction to Cybersecurity</h4>
                            <Badge variant="outline">2022</Badge>
                          </div>
                          <p className="text-muted-foreground">
                            Started learning cybersecurity fundamentals, including basic networking and security
                            concepts.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-5 w-5 rounded-full bg-primary"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold">Cloud Security Basics</h4>
                            <Badge variant="outline">2023</Badge>
                          </div>
                          <p className="text-muted-foreground">
                            Explored fundamental cloud security concepts, focusing on AWS services and security best
                            practices.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-5 w-5 rounded-full bg-primary"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold">DevSecOps Principles</h4>
                            <Badge variant="outline">2023</Badge>
                          </div>
                          <p className="text-muted-foreground">
                            Began learning about integrating security into development processes and CI/CD pipelines.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-5 w-5 rounded-full bg-primary"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold">Blue Team & Security Operations</h4>
                            <Badge variant="outline">2024</Badge>
                          </div>
                          <p className="text-muted-foreground">
                            Currently focusing on defensive security practices, incident response, and security
                            operations center (SOC) fundamentals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="py-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-bold">Security Assessment</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Vulnerability Assessment</li>
                  <li>Penetration Testing</li>
                  <li>Security Code Review</li>
                  <li>Threat Modeling</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-bold">Cloud Security</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>AWS Security Services</li>
                  <li>Azure Security Center</li>
                  <li>Cloud Security Posture Management</li>
                  <li>Infrastructure as Code Security</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-bold">DevSecOps</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>CI/CD Pipeline Security</li>
                  <li>Container Security</li>
                  <li>Infrastructure as Code</li>
                  <li>Security Automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-bold">Emerging Technologies</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>LLM Security</li>
                  <li>API Security</li>
                  <li>Zero Trust Architecture</li>
                  <li>Blockchain Security</li>
                </ul>
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

