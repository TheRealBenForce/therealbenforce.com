import { ArrowUpRightIcon, CalendarDaysIcon, GithubIcon, LinkedinIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)
  const hasFeatured = featuredPosts.length > 0

  return (
    <section id='home' className='bg-muted py-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-6 self-center text-center'>
          <h1 className='text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl'>
            Hi, I'm Ben.
          </h1>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl'>
            I'm an experienced security professional with 15+ years across engineering, cloud, endpoint, architecture, and enterprise platforms — now specializing in automation and SOAR to reduce risk and increase operational efficiency at scale.
          </p>
        </div>

        {hasFeatured && (
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {featuredPosts.map((item, index) => (
              <div key={`${item.author}-${index}`} className='group'>
                <Card className='cursor-default py-0 shadow-none'>
                  <CardContent className='grid grid-cols-1 px-0 xl:grid-cols-2'>
                    <div className='p-6'>
                      <a href={`/blog/${item.slug}`} className='block h-59.5 w-full overflow-hidden rounded-lg'>
                        <img
                          src={item.imageUrl}
                          alt={item.imageAlt}
                          className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                          loading='lazy'
                        />
                      </a>
                    </div>
                    <div className='flex flex-col justify-center gap-3 p-6'>
                      <div className='flex items-center gap-1.5 py-1'>
                        <div className='text-muted-foreground flex grow items-center gap-1.5'>
                          <CalendarDaysIcon className='size-5' />
                          <p>{item.pubDate}</p>
                        </div>
                        <Badge
                          className='bg-primary/10 text-primary cursor-pointer border-0 text-sm'
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.location.href = `/#category-${item.category}`
                          }}
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <a href={`/blog/${item.slug}`}>
                        <h3 className='text-xl font-medium'>{item.title}</h3>
                      </a>

                      <p className='text-muted-foreground'>{item.description}</p>
                      <div className='flex w-full items-center justify-between gap-1 py-1'>
                        <span className='cursor-pointer text-sm font-medium'>{item.author}</span>
                        <Button
                          size='icon'
                          className='group-hover:bg-primary! bg-background text-foreground hover:bg-primary! hover:text-primary-foreground group-hover:text-primary-foreground border group-hover:border-transparent hover:border-transparent'
                          asChild
                        >
                          <a href={`/blog/${item.slug}`}>
                            <ArrowUpRightIcon />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
