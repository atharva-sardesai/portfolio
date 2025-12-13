// Projects data structure - Operator-style format
// Problem → Approach → Tools → Outcome → Key learning

export interface Project {
  id: string
  title: string
  type: "project" | "certification" | "experience"
  problem: string
  approach: string
  tools: string[]
  outcome: string
  learning: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "cicd-security",
    title: "CI/CD Security Integration",
    type: "project",
    problem: "Need to integrate security scanning into development workflows without slowing down deployment cycles.",
    approach: "Implemented automated security scanning in GitHub Actions workflow with SAST, dependency scanning, and container image scanning.",
    tools: ["GitHub Actions", "Trivy", "Snyk", "Docker", "AWS"],
    outcome: "Reduced security vulnerabilities in production by 60% and enabled shift-left security practices in the development lifecycle.",
    learning: "Security automation in CI/CD requires balancing thoroughness with speed. Parallel scanning stages and caching strategies are critical.",
    featured: true,
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Cloud Foundations",
    type: "certification",
    problem: "Need foundational understanding of AWS cloud services and security best practices for cloud-native deployments.",
    approach: "Completed AWS Cloud Foundations certification covering core services, security models, and architectural patterns.",
    tools: ["AWS", "IAM", "VPC", "CloudWatch", "S3"],
    outcome: "Certified knowledge of AWS core services and security best practices, enabling secure cloud architecture design.",
    learning: "Cloud security starts with proper IAM policies and network segmentation. Understanding shared responsibility model is crucial.",
    featured: true,
  },
  {
    id: "blue-team-fundamentals",
    title: "Blue Team Security Operations",
    type: "experience",
    problem: "Need practical understanding of security operations, incident response, and defensive security strategies.",
    approach: "Completed comprehensive course on security operations, SIEM usage, threat detection, and incident response procedures.",
    tools: ["SIEM", "Threat Intelligence", "Incident Response", "Log Analysis"],
    outcome: "Developed hands-on skills in threat detection, log analysis, and incident response workflows.",
    learning: "Effective blue team operations require continuous monitoring, proper log aggregation, and well-defined incident response playbooks.",
    featured: true,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
export const otherProjects = projects.filter(p => !p.featured)

