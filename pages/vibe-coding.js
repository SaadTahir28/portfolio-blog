import siteMetadata from '@/data/siteMetadata'
import vibeCodingData from '@/data/vibeCodingData'
import { PageSEO } from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'
import { Analytics } from '@vercel/analytics/react'

export default function VibeCoding() {
  return (
    <>
      <PageSEO
        title={`Vibe Coding - ${siteMetadata.author}`}
        description="Playable browser prototypes vibe coded as single self-contained HTML files."
      />
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Vibe Coding
          </h1>
          <p className="text-lg leading-7 text-gray-400">
            Small games and toys I vibe coded straight into the browser. Each one is a single
            self-contained HTML file with no build step, no engine and no install. Hit play and it
            runs.
          </p>
        </div>
        <div className="container py-12">
          {vibeCodingData.length === 0 && <p className="text-gray-400">No prototypes yet.</p>}
          <div className="mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]">
            {vibeCodingData.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tools={d.tools}
                deployed={d.deployed}
                youtube={d.youtube}
                play={d.play}
              />
            ))}
          </div>
        </div>
      </div>
      <Analytics />
    </>
  )
}
