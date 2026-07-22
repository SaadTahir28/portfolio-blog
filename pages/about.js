import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'
import { GitHubIcon, LinkedInIcon, MailIcon, UpworkIcon, InstagramIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/vr-photo.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link href={href} aria-label={children} title={children} className="group flex">
        <Icon className="h-7 w-7 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github, upwork } = siteMetadata
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Saad Tahir. I'm a software engineer and a lifelong learner. I'm passionate about building great software and sharing what I learn along the way."
        />
      </Head>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I'm Saad
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              A software engineer by trade, I'm all about diving into the latest tech and crafting creative solutions to tricky problems. 
              My expertise spans diverse domains, including Unity, Blockchain, iOS Native, and React, where I've honed my skills to deliver cutting-edge solutions. 
              I love playing games and finding creative inspiration in virtual worlds. 
              Whether it's unraveling a complex challenge or discussing the latest game mechanics, I'm always up for it. 
              And as a digital nomad, I've got the freedom to work from anywhere, which is pretty awesome. 
              So come along and explore the world of digital innovation with me, where creativity thrives.
              </p>
            </div>
            <div className="mt-6 mb-6">
              <ul role="list" className="flex items-center space-x-5">
                  <SocialLink href={github} icon={GitHubIcon}>
                      Follow on GitHub
                  </SocialLink>
                  <SocialLink href={linkedin} icon={LinkedInIcon}>
                      Follow on LinkedIn
                  </SocialLink>
                  <SocialLink href={upwork} icon={UpworkIcon}>
                      Hire on Upwork
                  </SocialLink>
                  <SocialLink href={`mailto:${email}`} icon={MailIcon}>
                      Email Saad
                  </SocialLink>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center pb-10 lg:justify-end lg:pb-0 lg:pl-8">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <Image
                src={portraitImage}
                alt="portrait of Saad Tahir"
                className="h-auto w-full rounded-2xl bg-zinc-100 object-contain dark:bg-zinc-800"
                />
          </div>
        </div>
      </div>
      <Analytics />
    </>
  )
}
