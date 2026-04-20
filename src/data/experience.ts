export interface ExperienceEntry {
  company: string
  position: string
  duration: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'The Vanguard Group',
    position: 'Lead SOAR Developer | Security Operations Center',
    duration: 'November 2025 — Present',
    summary: '',
    highlights: []
  },
  {
    company: 'The Vanguard Group',
    position: 'DevSecOps Assurance Expert | Global Enterprise Security',
    duration: 'March 2023 — November 2025',
    summary:
      'Led strategic enablement for major security initiatives, including SAST and unified vulnerability management.',
    highlights: [
      'Reduced false-positive hardcoded credential findings by over 80% through targeted SAST query tuning.',
      'Developed an 18-month "Journey to UVM" roadmap by aligning stakeholders across multiple security domains to a unified long-term vision.',
      'Engineered Infrastructure as Code for foundational UVM capabilities, mapping cloud security findings to business applications using a risk-based approach.',
      'Evaluated emerging security platforms and delivered data-driven recommendations to strengthen detection and response.'
    ]
  },
  {
    company: 'The Vanguard Group',
    position: 'Solutions Consultant | Workplace Experience and Architecture',
    duration: 'February 2022 — March 2023',
    summary:
      'Improved employee experience by reducing friction in daily workflows through data-driven analysis and UX research.',
    highlights: [
      'Designed and deployed solutions that resolved 85% of negative feedback submitted through the employee Service Portal.',
      'Led a UX case study on password reset trends, identifying why reset incidents increased 25% during the pandemic and did not return to baseline.',
      'Implemented fixes for 4 of 11 high-impact findings identified in the case study.',
      'Facilitated discussions with key stakeholders on modern, industry-standard self-service password reset capabilities.'
    ]
  },
  {
    company: 'The Vanguard Group',
    position: 'Senior Platform Engineer | End User Computing',
    duration: 'April 2019 — February 2022',
    summary:
      'Engineered and maintained the VMware Anywhere Workspace platform, supporting diverse VDI use cases and more than 10,000 corporate and BYOD mobile devices.',
    highlights: [
      'Improved VDI delivery processes, reducing lead time by 22% while enabling a 300% increase in volume.',
      'Developed ServiceNow integrations for Workspace ONE to meet new global business requirements during the pandemic.',
      'Ensured continuity for a hybrid workforce by adapting and optimizing operational workflows.',
      'Implemented infrastructure health monitoring using Splunk and PagerDuty APIs.',
      'Researched and evaluated new cloud-based virtual workspace technologies, including VMware on AWS, AWS WorkSpaces, and Horizon on Azure.'
    ]
  },
  {
    company: 'The Vanguard Group',
    position: 'Hybrid Cloud Infrastructure Engineer | Chief Technology Office',
    duration: 'September 2016 — April 2019',
    summary:
      'Engineered and supported hybrid cloud services including DNS, NTP, Active Directory, network peering, routing, and Palo Alto egress using Python and CloudFormation across a large AWS Organization.',
    highlights: [
      'Created Bamboo CI/CD build and deployment specifications in Java and YAML to enable one-click infrastructure deployments.',
      'Authored AWS CloudFormation templates and deployed them through enterprise CI/CD pipelines.',
      'Defined KPIs for critical infrastructure components using CloudWatch metrics, logs, and on-prem telemetry.',
      'Developed Python Lambda functions to aggregate data across a multi-account AWS environment.',
      'Mentored FinTech product teams through cloud adoption and modernization.'
    ]
  },
  {
    company: 'The Vanguard Group',
    position: 'Systems Operations Analyst | Global Technology Office',
    duration: 'May 2014 — September 2016',
    summary:
      'Administered more than 5,000 Windows servers in a global, highly available, distributed environment. Supported bare-metal, ESXi, and Hyper-V platforms while participating in ITIL-aligned incident management.',
    highlights: [
      'Served as primary engineer for enterprise file shares and home directories supporting over 15,000 users.',
      'Migrated a major FTP environment from IIS 6/7 to IIS 8.',
      'Implemented Splunk monitoring of IIS logs to improve incident response and traffic analysis.',
      'Reduced mean-time-to-detect for service account lockout incidents by more than 90% through automated alerting.',
      'Automated routine operational tasks using PowerShell.'
    ]
  },
  {
    company: 'The Vanguard Group',
    position: 'Software Testing Administrator | Corporate Strategy',
    duration: 'July 2012 — May 2014',
    summary:
      'Managed annual testing cycles for investment reporting systems and new in-house applications.',
    highlights: [
      'Collaborated with business partners, developers, and DBAs on requirements and application design.',
      'Trained mutual fund reporting teams on tools and processes to improve testing standards and consistency.',
      'Led a DMAIC initiative to modernize the CAT Test Readiness Review process.'
    ]
  }
]
