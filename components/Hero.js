import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5'
import Notification from './Notification'
import siteMetadata from '@/data/siteMetadata'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1 " {...props}>
      <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1 " {...props}>
      <Icon
        className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200"
        onClick={handleClick}
      />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="mb-5 max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        Hi, I'm Saad
      </h1>
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
        As a digital nomad, I'm currently working in a tech startup at California, States.
        My journey to software development started at a local company, where I truly learnt how you can do anything if you are a quick learner. 
        There, I got trained into multiple domains such as Unity, Mixed Reality, Blockchain and iOS Native and played a leading role in each of them.
        My driving force? A dynamic team and engaging challenges that ignite my
        passion every day. I'm always looking for new opportunities to learn and grow.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href={siteMetadata.github}
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href={siteMetadata.linkedin}
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
        <CopyToClipboard
          text={{ contact: siteMetadata.email, type: 'Email' }}
          aria-label="Send me an email"
          icon={IoMail}
        />
        <CopyToClipboard
          text={{ contact: siteMetadata.phone, type: 'Phone number' }}
          aria-label="Give me a call"
          icon={IoCall}
        />
      </div>
    </div>
  )
}
