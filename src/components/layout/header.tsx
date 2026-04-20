'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { MailIcon, MenuIcon } from 'lucide-react'

import ThemeToggle from '@/components/layout/theme-toggle'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

import LogoSvg from '@/assets/svg/logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll-based active section on the home page
      const path = window.location.pathname

      if (path !== '/') {
        return
      }

      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = section as HTMLElement
        const { offsetTop, offsetHeight } = element

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (element.id !== activeSection) {
            setActiveSection(element.id)
          }

          break
        }
      }
    }

    // Initial check
    handleScroll()

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  useLayoutEffect(() => {
    // Update activeSection based on the current route using window.location.pathname
    const path = window.location.pathname

    setTimeout(() => {
      if (path === '/' || path === '/#home') {
        setActiveSection('home')
      } else if (path.startsWith('/about')) {
        setActiveSection('about')
      } else if (path.startsWith('/blog/')) {
        setActiveSection('') // Don't show any active state on blog post pages
      } else if (path.startsWith('/contact')) {
        setActiveSection('contact')
      } else {
        setActiveSection('') // Default case for other routes
      }
    }, 0)
  }, [])

  return (
    <header
      className={cn(
        'bg-background z-50 h-16 w-full shrink-0 transition-all duration-300',
        {
          'shadow-sm': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 relative'>
        {/* Navigation - Left */}
        <MenuNavigation navigationData={navigationData} activeSection={activeSection} className='max-lg:hidden' />

        {/* Name - Centered */}
        <a href='/' className='absolute left-1/2 -translate-x-1/2'>
          <span className='text-primary text-[28px] font-semibold whitespace-nowrap'>Ben Force</span>
        </a>

        {/* Actions - Right */}
        <div className='flex gap-3'>
          <ThemeToggle />

          {/* Mobile menu */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            activeSection={activeSection}
            trigger={
              <Button variant='outline' size='icon' className='lg:hidden'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
