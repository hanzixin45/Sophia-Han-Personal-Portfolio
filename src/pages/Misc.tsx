import { miscItems } from "../data/misc"
import MediaCard from "../components/MediaCard"

const ratioMap: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  tall: "aspect-[4/5]",
}

export default function Misc() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 h-80 w-80 rounded-blob bg-gold/10 blur-3xl animate-blob-morph" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 rounded-blob bg-forest/10 blur-3xl animate-blob-morph [animation-delay:-7s]" />

      {/* HERO */}
      <section className="container-page relative pt-12 pb-14 lg:pt-20 lg:pb-20">
        <div className="max-w-3xl animate-fade-in">
          <span className="eyebrow">Miscellaneous · 碎片</span>
          <h1 className="mt-4 serif text-[46px] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl lg:text-[80px] text-balance">
            Bits &
            <span className="block italic text-gold"> Pieces.</span>
          </h1>
          <p className="mt-7 max-w-2xl serif text-xl leading-relaxed text-ink-soft">
            生活的碎片与灵感瞬间。
            <br />
            那些不是演出也不是剧目，但同样值得被好好收藏的日子。
          </p>
        </div>
      </section>

      {/* MASONRY GALLERY using CSS columns for true masonry */}
      <section className="container-page pb-20 lg:pb-28 relative">
        <div
          className="
            columns-1 sm:columns-2 xl:columns-3
            gap-6 xl:gap-8
            [column-fill:_balance]
          "
        >
          {miscItems.map((item, i) => (
            <div
              key={item.id}
              className="mb-6 xl:mb-8 break-inside-avoid animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <MediaCard
                imageUrl={item.imageUrl}
                isVideo={item.type === "video"}
                videoUrl={item.videoUrl}
                // Misc 不需要 dateLine，直接用 caption 做第一行
                title={item.caption}
                extraTag={item.type === "video" ? "Video" : undefined}
                extraTagColor={item.type === "video" ? "gold" : undefined}
                aspectClass={ratioMap[item.ratio ?? "landscape"]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING QUOTE */}
      {/* CLOSING QUOTE */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-cream to-wine/10 p-10 sm:p-16 shadow-soft border border-gold/20">
          <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-blob bg-wine/15 blur-3xl animate-blob-morph" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-blob bg-forest/15 blur-3xl animate-blob-morph [animation-delay:-9s]" />

          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-5xl text-wine">❝ ❞</p>
            <p className="mt-4 serif text-2xl sm:text-3xl leading-[1.5] font-medium text-ink">
              Life is not a series of grand performances,
              <br className="hidden sm:block" />
              but a mosaic of tiny, beautiful moments.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-forest">
              — thank you for scrolling all the way down 🌿
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
