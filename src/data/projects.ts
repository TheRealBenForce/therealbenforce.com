export interface ProjectEntry {
  name: string
  url: string
  description: string
}

export const projects: ProjectEntry[] = [
  {
    name: 'mister-hassio',
    url: 'https://github.com/TheRealBenForce/mister-hassio',
    description:
      'Written in Python, mister-hassio creates an integration between the MiSTer retro game console running on a DE-10 Nano and Home Assistant. This allows a user to display MiSTer FPGA information in their Home Assistant dashboards.'
  },
  {
    name: 's3plus',
    url: 'https://github.com/TheRealBenForce/s3plus',
    description:
      'CloudFormation for the infrastructure that manages a low-cost secure static website. The site is hosted in S3 and distributed over CloudFront CDN, with an AWS CodePipeline to deploy content updates through development and production stages.'
  }
]
