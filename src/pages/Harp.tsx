import { useState, useEffect, useMemo } from "react"
import { harpPerformances } from "../data/harp"
import MediaCard from "../components/MediaCard"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function Harp() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [photoSources, setPhotoSources] = useState<{ src: string }[]>([])

  const flashmobItems = useMemo(() => {
    return harpPerformances.filter(
      (item) => item.id.startsWith("h-christmas-flashmob") || item.id.startsWith("h-farewell-flashmob")
    )
  }, [harpPerformances])
  const performanceAndOtherItems = useMemo(() => {
    return harpPerformances.filter(
      (item) =>
        !item.id.startsWith("h-christmas-flashmob") &&
        !item.id.startsWith("h-farewell-flashmob")
    )
  }, [harpPerformances])

  // Collect all photo sources for Lightbox
  useEffect(() => {
    setPhotoSources(performanceAndOtherItems.filter(item => item.type === "photo").map(item => ({ src: item.imageUrl })))
  }, [performanceAndOtherItems])

  const handleImageClick = (imageUrl: string) => {
    const idx = photoSources.findIndex(photo => photo.src === imageUrl)
    if (idx !== -1) {
      setIndex(idx)
      setOpen(true)
    }
  }

  return (
    <div className="relative overflow-hidden">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photoSources}
        index={index}
      />
      {/* decorative blobs */}
      <div className="pointer-events-none absolute top-0 -right-32 h-96 w-96 rounded-blob bg-gold/15 blur-3xl animate-blob-morph" />
      <div className="pointer-events-none absolute top-80 -left-24 h-72 w-72 rounded-blob bg-forest/10 blur-3xl animate-blob-morph [animation-delay:-8s]" />

      {/* HERO HEADER */}
      <section className="container-page pt-12 pb-14 lg:pt-20 lg:pb-20 relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 animate-fade-in">
            <span className="eyebrow">Harp</span>
            <h1 className="mt-4 serif text-[44px] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl lg:text-[84px] text-balance">
              Harp
              <span className="block text-forest italic">& Beyond.</span>
            </h1>
            <p className="mt-7 max-w-2xl serif text-xl leading-relaxed text-ink-soft">
              From the first pluck of the strings at age ten, the harp has been my gentle companion.
              <br />
              Here, I document every moment shared with it – in concert halls, on competition stages, and even in small gardens.
            </p>
          </div>
          <div className="lg:col-span-4 animate-fade-in-delay-1">
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-cream to-wine/5 p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎻</span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                  Since 2015
                </p>
              </div>
              <p className="mt-4 serif text-2xl font-semibold text-ink leading-tight">
                10+ years
                <br />
                <span className="text-gold">with the harp.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCES GALLERY */}
      <section className="container-page pb-20 lg:pb-28 relative">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Performances & Competitions</span>
            <h2 className="mt-3 serif text-3xl font-bold text-ink sm:text-4xl">
              Moments on <span className="text-wine italic">stage</span>
            </h2>
          </div>
          <p className="serif text-sm text-ink-soft italic max-w-sm">
            Every performance is an opportunity to open my heart to the world.
            <br />
            Thankful for the music that makes these moments unforgettable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:gap-8">
          {performanceAndOtherItems.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <MediaCard
                imageUrl={item.imageUrl}
                isVideo={item.type === "video"}
                videoUrl={item.videoUrl}
                dateLine={`${item.date} · ${item.location}`}
                title={item.title}
                description={item.description}
                extraTag={item.type === "video" ? "Video" : undefined}
                extraTagColor={item.type === "video" ? "gold" : undefined}
                onImageClick={handleImageClick}
              />
            </div>
          ))}
        </div>
      </section>



      {/* SCHOOL FLASHMOBS SECTION */}
      <section className="container-page pb-20 lg:pb-28 relative">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Music Beyond the Concert Hall</span>
            <h2 className="mt-3 serif text-3xl font-bold text-ink sm:text-4xl">
              School <span className="text-forest italic">Flashmobs</span>
            </h2>
          </div>
          <p className="serif text-sm text-ink-soft italic max-w-sm">
            “Beyond formal concerts and competitions, I helped organize and perform in two school flashmobs, playing the harp, glockenspiel, and other percussion instruments. With audiences of over 300 students and teachers, these performances transformed ordinary campus spaces into shared musical experiences.”
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:gap-8">
          {flashmobItems.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <MediaCard
                imageUrl={item.imageUrl}
                isVideo={item.type === "video"}
                videoUrl={item.videoUrl}
                dateLine={`${item.date} · ${item.location}`}
                title={item.title}
                description={item.description}
                extraTag={item.type === "video" ? "Video" : undefined}
                extraTagColor={item.type === "video" ? "gold" : undefined}
                onImageClick={handleImageClick}
              />
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}
