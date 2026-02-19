// Projects data structure - Operator-style format
// Problem → Approach → Tools → Outcome → Key learning → Business Impact

export interface Project {
  id: string
  title: string
  type: "project" | "certification" | "experience" | "research"
  problem: string
  approach: string
  tools: string[]
  outcome: string
  learning: string
  businessImpact?: string
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
    businessImpact: "Enabled shift-left security that reduced production risk and ensured regulatory compliance for enterprise-scale deployments.",
    featured: true,
  },
  {
    id: "ai-intake-sop",
    title: "AI Intake Standard Operating Procedure (SOP)",
    type: "project",
    problem: "Enterprises adopting AI/LLM tools lack standardized governance processes, exposing them to data privacy, compliance, and operational risks.",
    approach: "Designed and authored a comprehensive AI Intake SOP framework covering risk classification, data handling requirements, vendor assessment criteria, and approval workflows for enterprise AI tool adoption.",
    tools: ["GRC Frameworks", "NIST AI RMF", "Risk Assessment", "Policy Design", "Compliance Mapping"],
    outcome: "Created a repeatable governance framework that enables organizations to evaluate and onboard AI tools with consistent risk controls and audit trails.",
    learning: "Effective AI governance requires balancing innovation velocity with risk controls—overly restrictive policies stifle adoption, while lax governance creates unacceptable exposure.",
    businessImpact: "Reduced unvetted AI tool proliferation and established a scalable governance process that aligns AI adoption with enterprise risk appetite and regulatory requirements.",
    featured: true,
  },
  {
    id: "ai-security-scanner",
    title: "Automated AI Security Scanner",
    type: "project",
    problem: "Manual security assessments of AI/LLM deployments are time-intensive and inconsistent, leaving gaps in coverage across enterprise AI portfolios.",
    approach: "Built an automated security scanning tool that evaluates AI/LLM applications against common vulnerability patterns including prompt injection, data leakage, model manipulation, and insecure API configurations.",
    tools: ["Python", "OWASP LLM Top 10", "API Security", "Automated Testing", "Risk Scoring"],
    outcome: "Automated the detection of critical AI security vulnerabilities, enabling continuous assessment across multiple AI deployments with consistent risk scoring.",
    learning: "AI security scanning must evolve with the threat landscape—static rule-based checks are insufficient; adaptive testing frameworks that account for model-specific behaviors are essential.",
    businessImpact: "Enabled proactive risk mitigation for AI deployments, reducing manual assessment overhead and providing leadership with quantifiable risk metrics for informed decision-making.",
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
