import { timelineEvents, productions } from "../data/drama"
import MediaCard from "../components/MediaCard"
import React, { useState } from "react"

export default function Drama() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showLightbox, setShowLightbox] = useState<boolean>(false)

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }

  return (
    <div className="relative overflow-hidden">
      {showLightbox && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <img src={selectedImage} alt="Enlarged view" className="max-h-[90%] max-w-[90%] object-contain" />
        </div>
      )}
      <div className="pointer-events-none absolute top-0 left-1/3 h-96 w-96 rounded-blob bg-wine/10 blur-3xl animate-blob-morph" />
      <div className="pointer-events-none absolute top-60 -right-24 h-80 w-80 rounded-blob bg-gold/10 blur-3xl animate-blob-morph [animation-delay:-6s]" />

      {/* HERO HEADER */}
      <section className="container-page pt-12 pb-16 lg:pt-20 lg:pb-24 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <span className="eyebrow">Drama</span>
          <h1 className="mt-4 serif text-[46px] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl lg:text-[88px] text-balance">
            On <span className="italic text-wine">Stage</span>
            <span className="block mt-2">As the curtain slowly rises.</span>
          </h1>
          <p className="mt-8 serif text-xl leading-relaxed text-ink-soft max-w-2xl mx-auto">
            I founded SMS Drama! with a simple hope: to create a place where students could discover theater, experiment with their ideas, and bring stories to life together. What began as a small idea gradually grew into a community of over 40 members, each finding their own way to contribute—onstage or behind the scenes.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-page pb-20 lg:pb-24 relative">
        <div className="mb-12 text-center">
          <span className="eyebrow">My Journey</span>
          <h2 className="mt-3 serif text-3xl sm:text-4xl font-bold text-forest">
              2 Years in Drama Club
            </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* center line for desktop */}
          <div
            aria-hidden
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/60 to-wine/0 sm:-translate-x-px"
          />
          <ul className="space-y-14">
            {timelineEvents.map((ev, i) => {
              const even = i % 2 === 0
              return (
                <li
                  key={ev.id}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-12 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute left-6 sm:left-1/2 top-1 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-cream bg-gradient-to-br from-gold text-white shadow-soft text-lg z-10"
                  >
                    {ev.icon ?? "✦"}
                  </span>

                  <div
                    className={`pl-20 sm:pl-0 ${
                      even ? "sm:text-right sm:pr-14" : "sm:col-start-2 sm:pl-14"
                    }`}
                  >
                    <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-0.5 duration-500">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        {ev.year}
                      </p>
                      <h3 className="mt-2 serif text-2xl font-semibold text-ink">
                        {ev.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {ev.description}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Drama Club Presentation */}
      <section className="container-page pb-20 lg:pb-28 relative">
        <div className="mb-10 text-center">
          <span className="eyebrow">Creative Work</span>
          <h2 className="mt-3 serif text-3xl sm:text-4xl font-bold text-forest">
            Drama Club Presentations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="relative col-span-1">
            <img
              src="/images/drama/PPT 1.png"
              alt="Drama Club Presentation Slide 1"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/PPT 1.png')}
            />
          </div>
          <div className="relative col-span-1">
            <img
              src="/images/drama/PPT 2.png"
              alt="Drama Club Presentation Slide 2"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/PPT 2.png')}
            />
          </div>
          <div className="relative col-span-1">
            <img
              src="/images/drama/PPT 3.png"
              alt="Drama Club Presentation Slide 3"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/PPT 3.png')}
            />
          </div>
          <div className="relative col-span-1 sm:col-span-2 lg:col-span-1"> {/* This will make it span 2 columns on small/medium screens, 1 on large */}
            <img
              src="/images/drama/PPT 4.png"
              alt="Drama Club Presentation Slide 4"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/PPT 4.png')}
            />
          </div>
          <div className="relative col-span-1 lg:col-span-1">
            <img
              src="/images/drama/PPT 5.png"
              alt="Drama Club Presentation Slide 5"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/PPT 5.png')}
            />
          </div>
        </div>

        <div className="text-center mt-10 space-y-4"> {/* Added space-y-4 for vertical spacing */}
          <a
            href="/documents/drama/Drama ppt 1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wine hover:bg-wine-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wine-dark"
          >
            View Full Presentation 1 (PDF)
            <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="/documents/drama/SMS Drama ppt 2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wine hover:bg-wine-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wine-dark"
          >
            View Full Presentation 2 (PDF)
            <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* PRODUCTIONS GALLERY */}
      <section className="container-page pb-20 lg:pb-28 relative">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Productions</span>
            <h2 className="mt-3 serif text-3xl font-bold text-ink sm:text-4xl">
              Every role,
              <span className="text-forest italic"> every life lived.</span>
            </h2>
          </div>
          <p className="serif text-sm italic text-ink-soft max-w-sm">
            Stage photos, backstage, curtain calls - moments to be cherished.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {productions.map((p, i) => (
            <div
              key={p.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <MediaCard
                imageUrl={p.imageUrl}
                isVideo={p.type === "video"}
                videoUrl={p.videoUrl}
                dateLine={p.season}
                title={p.playName}
                description={p.description}
                extraTag={`Role: ${p.role}`}
                extraTagColor="wine"
                aspectClass={
                  i % 4 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }
                onImageClick={handleImageClick}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Materials */}
      <section className="container-page pb-20 lg:pb-28 relative">
        <div className="mb-10 text-center">
          <span className="eyebrow">Design & Outreach</span>
          <h2 className="mt-3 serif text-3xl sm:text-4xl font-bold text-forest">
            Promotional Materials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="relative col-span-1">
            <img
              src="/images/drama/Post 1.png"
              alt="Promotional Post 1"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/Post 1.png')}
            />
          </div>
          <div className="relative col-span-1">
            <img
              src="/images/drama/Post 2.png"
              alt="Promotional Post 2"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/Post 2.png')}
            />
          </div>
          <div className="relative col-span-1">
            <img
              src="/images/drama/Post 3.png"
              alt="Promotional Post 3"
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick('/images/drama/Post 3.png')}
            />
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-wine via-wine-light to-wine p-10 sm:p-16 text-cream shadow-lift">
          <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-blob bg-gold/20 blur-3xl animate-blob-morph" />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="text-5xl">❝</span>
            <p className="mt-4 serif text-2xl sm:text-4xl leading-[1.4] font-medium">
              All the world's a stage,
              <br className="hidden sm:block" />
              and all the men and women merely players.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-light">
              — William Shakespeare, As You Like It
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
