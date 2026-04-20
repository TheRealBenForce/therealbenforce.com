'use client'

import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const CTA = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24' id='connect'>
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <Card className='shadow-none'>
          <CardContent>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {/* Left Column - Image */}
              <div className='relative h-64 sm:h-80 lg:h-auto'>
                <img
                  src='/images/cta.webp'
                  alt='Workspace'
                  className='h-full w-full rounded-lg object-cover'
                  loading='lazy'
                />
              </div>

              {/* Right Column - Content */}
              <Card className='bg-muted rounded-lg border-0 shadow-none'>
                <CardContent className='flex h-full flex-col justify-between gap-6'>
                  <h2 className='text-xl leading-tight font-semibold lg:text-2xl'>
                    Let's connect.
                  </h2>
                  <p className='text-muted-foreground text-base'>
                    I'm always interested in talking about security, cloud infrastructure, automation, and interesting side projects.
                    Feel free to reach out through any of the channels below.
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    <Button variant='outline' size='lg' className='text-base' asChild>
                      <a href='mailto:theRealBenForce@gmail.com?subject=I visited your website!'>
                        <MailIcon className='mr-1.5 size-4' />
                        Email
                      </a>
                    </Button>
                    <Button variant='outline' size='lg' className='text-base' asChild>
                      <a href='https://github.com/theRealBenForce' target='_blank' rel='noopener noreferrer'>
                        <GithubIcon className='mr-1.5 size-4' />
                        GitHub
                      </a>
                    </Button>
                    <Button variant='outline' size='lg' className='text-base' asChild>
                      <a href='https://www.linkedin.com/in/theRealBenForce' target='_blank' rel='noopener noreferrer'>
                        <LinkedinIcon className='mr-1.5 size-4' />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTA
