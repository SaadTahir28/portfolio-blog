import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
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
                As a digital nomad, I'm currently working in a tech startup at California, States.
                My journey to software development started at a local company, where I truly learnt how you can do anything if you are a quick learner. 
                There, I got trained into multiple domains such as Unity, Mixed Reality, Blockchain and iOS Native and played a leading role in each of them.
                My driving force? A dynamic team and engaging challenges that ignite my
                passion every day. I'm always looking for new opportunities to learn and grow.
              </p>
            </div>
            <div className="mt-6 mb-6 lg:pr-20">
              <ul role="list">
                  <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                      Follow on GitHub
                  </SocialLink>
                  <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                      Follow on LinkedIn
                  </SocialLink>
                  <SocialLink
                      href={`mailto:${email}`}
                      icon={MailIcon}
                      className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                  >
                      {siteMetadata.email}
                  </SocialLink>
              </ul>
            </div>
          </div>
          <div className="lg:pl-40 flex justify-center items-center">
          <div className="w-64 h-64 lg:w-64 lg:h-64">
            <Image
                src={portraitImage}
                alt="portrait of Saad Tahir"
                className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-800 object-cover"
                />
          </div>
        </div>
      </div>
      <Analytics />
    </>
  )
}
