// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Ben Force — Enterprise Security Professional'
export const SITE_DESCRIPTION =
  'Personal site of Ben Force — enterprise security professional, SOAR developer, and cloud infrastructure engineer. Blog, resume, and projects.'

export const GITHUB_URL = 'https://github.com/theRealBenForce'
export const SITE_URL = 'https://therealbenforce.com/'

export const SITE_METADATA = {
  title: {
    default: 'Ben Force — Enterprise Security Professional'
  },
  description:
    'Personal site of Ben Force — enterprise security professional, SOAR developer, and cloud infrastructure engineer. Blog, resume, and projects.',
  keywords: [
    'Ben Force',
    'enterprise security',
    'SOAR',
    'DevSecOps',
    'cloud security',
    'CISSP',
    'AWS',
    'security automation',
    'blog',
    'resume'
  ],
  authors: [{ name: 'Ben Force', url: SITE_URL }],
  creator: 'Ben Force',
  publisher: 'Ben Force',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ben Force',
    title: 'Ben Force — Enterprise Security Professional',
    description:
      'Personal site of Ben Force — enterprise security professional, SOAR developer, and cloud infrastructure engineer.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ben Force — Enterprise Security Professional',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@therealbenforce',
    creator: '@therealbenforce',
    title: 'Ben Force — Enterprise Security Professional',
    description:
      'Personal site of Ben Force — enterprise security professional, SOAR developer, and cloud infrastructure engineer.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  linkedin: 'https://www.linkedin.com/in/theRealBenForce'
}

// Personal information for structured data
export const PERSON_INFO = {
  name: 'Ben Force',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  address: {
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US'
  },
  contactPoint: {
    contactType: 'personal',
    email: 'theRealBenForce@gmail.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
