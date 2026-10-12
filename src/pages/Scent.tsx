import React, { useState } from "react"
import { scents, echoScentIntro } from "../data/scent"
import MediaCard from "../components/MediaCard"

const BASE_URL = import.meta.env.BASE_URL;

interface VisualDesignItem {
  id: string;
  imageUrl: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  ratio: string;
}

interface VisualDesignProject {
  id: string;
  title: string;
  description: string;
  items: VisualDesignItem[];
}

const visualDesignProjects: VisualDesignProject[] = [
  {
    id: "project-drama",
    title: "Drama Club — Visual Identity & Merchandise",
    description: "Highlighting visual identity and merchandise designs for the school's Drama Club, reflecting its vibrant theatrical spirit and community engagement.",
    items: [
      {
        id: "dcm-1",
        imageUrl: `${BASE_URL}images/creative-studio/Drama Club Product 1.png`,
        title: "Drama Club Product 1",
        year: "2023",
        organization: "Drama Club",
        description: "Showcasing a unique design for Drama Club apparel, integrating thematic elements of performance and creativity.",
        ratio: "square",
      },
      {
        id: "dcm-2",
        imageUrl: `${BASE_URL}images/creative-studio/Drama Club Product 2.png`,
        title: "Drama Club Product 2",
        year: "2023",
        organization: "Drama Club",
        description: "An exploration of visual themes for promotional items, designed to capture the essence of dramatic arts.",
        ratio: "portrait",
      },
      {
        id: "dcm-3",
        imageUrl: `${BASE_URL}images/creative-studio/Drama Club Product 3.png`,
        title: "Drama Club Product 3",
        year: "2023",
        organization: "Drama Club",
        description: "A collection of merchandise designed to foster community and pride among Drama Club members.",
        ratio: "square",
      },
      {
        id: "dcm-4",
        imageUrl: `${BASE_URL}images/creative-studio/Drama Club Product 4.png`,
        title: "Drama Club Product 4",
        year: "2023",
        organization: "Drama Club",
        description: "Illustrative design for event-specific merchandise, combining modern aesthetics with classical theater motifs.",
        ratio: "landscape",
      },
      {
        id: "dcm-5",
        imageUrl: `${BASE_URL}images/creative-studio/Drama Club Product 5.png`,
        title: "Drama Club Product 5",
        year: "2023",
        organization: "Drama Club",
        description: "Promotional graphic for club recruitment, designed to be eye-catching and representative of the club's activities.",
        ratio: "portrait",
      },
    ],
  },
  {
    id: "project-herstory",
    title: "Herstory Club — Merchandise Design",
    description: "Visual designs crafted for the Herstory Club, focusing on empowering narratives and historical appreciation through unique merchandise.",
    items: [
      {
        id: "hcm-1",
        imageUrl: `${BASE_URL}images/creative-studio/Herstory Product 1.png`,
        title: "Herstory Product 1",
        year: "2022",
        organization: "Herstory Club",
        description: "A merchandise concept reflecting the club's mission, using strong typography and symbolic imagery.",
        ratio: "square",
      },
      {
        id: "hcm-2",
        imageUrl: `${BASE_URL}images/creative-studio/Herstory Product 2.png`,
        title: "Herstory Product 2",
        year: "2022",
        organization: "Herstory Club",
        description: "Promotional item design that embodies the spirit of exploration and recognition of women's historical contributions.",
        ratio: "portrait",
      },
    ],
  },
  {
    id: "project-posters",
    title: "Poster Design",
    description: "A curated collection of posters, each telling a distinct story through visual metaphor and striking composition.",
    items: [
      {
        id: "pd-1",
        imageUrl: `${BASE_URL}images/creative-studio/Poster for Hamlet.jpg`,
        title: "Poster for Hamlet",
        year: "2024",
        organization: "Literary Arts",
        description: "A theatrical poster inspired by Shakespeare's Hamlet, blending classical tragedy with contemporary design elements.",
        ratio: "portrait",
      },
      {
        id: "pd-2",
        imageUrl: `${BASE_URL}images/creative-studio/Poster for Orchestra.png`,
        title: "Poster for Orchestra",
        year: "2024",
        organization: "School Orchestra",
        description: "Promotional poster for the annual school orchestra concert, capturing the harmony and grandeur of classical music.",
        ratio: "landscape",
      },
    ],
  },
];

function NoteChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-forest/15 bg-cream px-3 py-1 text-sm font-display italic text-forest">
      {children}
    </span>
  )
}

function ScentCard({ scent }: { scent: (typeof scents)[number] }) {
  return (
    <article className="group relative rounded-[2rem] border border-forest/10 bg-white overflow-hidden transition-all duration-700 hover:shadow-card">
      {/* decorative visual bar */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cream via-cream-deep to-cream">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-blob bg-gold/30 blur-3xl animate-blob-morph" />
          <div className="absolute -right-6 bottom-0 h-40 w-40 rounded-blob bg-forest/20 blur-3xl animate-blob-morph [animation-delay:-6s]" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-forest/60">
            {scent.type}
          </span>
          <span className="mt-2 serif text-3xl text-forest/90 font-bold italic">
            ♡
          </span>
        </div>
      </div>

      <div className="p-8 sm:p-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
          {scent.tagline}
        </p>
        <h3 className="mt-3 serif text-4xl font-bold tracking-tight text-ink">
          {scent.name}
        </h3>
        <p className="mt-5 font-display italic text-lg leading-relaxed text-ink-soft border-l-2 border-gold/60 pl-4">
          {scent.quote}
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/70">
              ✦ Top Notes
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {scent.topNotes.map((n) => (
                <NoteChip key={n}>{n}</NoteChip>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/70">
              ✦ Middle Notes
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {scent.middleNotes.map((n) => (
                <NoteChip key={n}>{n}</NoteChip>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/70">
              ✦ Base Notes
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {scent.baseNotes.map((n) => (
                <NoteChip key={n}>{n}</NoteChip>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-forest/10 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-wine/80">
            Ambient
          </span>
          <span className="font-display italic text-sm text-gold">
            ✧ {scent.ambient}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Scent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showLightbox, setShowLightbox] = useState<boolean>(false);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-gradient-to-b from-cream via-[#FDFBF6] to-cream">
      {showLightbox && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <img src={selectedImage} alt="Enlarged view" className="max-h-[90%] max-w-[90%] object-contain" />
        </div>
      )}
      {/* HERO */}
      <section className="container-page relative pt-20 pb-28 lg:pt-28 lg:pb-40">
        <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-blob bg-gold/10 blur-3xl animate-blob-morph" />
        <div className="pointer-events-none absolute top-32 left-10 h-64 w-64 rounded-blob bg-forest/10 blur-3xl animate-blob-morph [animation-delay:-8s]" />

        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold font-semibold">
            · Scentify ·
          </p>
          <h1 className="mt-6 serif text-5xl sm:text-7xl lg:text-[96px] leading-[1.05] font-bold text-ink text-balance tracking-tight">
            Scentify
            <span className="block italic text-forest mt-2">
              — Creative Studio
            </span>
          </h1>
          <p className="mt-10 max-w-xl mx-auto font-display italic text-2xl leading-relaxed text-ink-soft">
            Turning personality, memory, and preference into a personalized fragrance experience.
          </p>
          <p className="mt-8 max-w-2xl mx-auto serif text-xl leading-relaxed text-ink-soft">
            Scentify began with my interest in how something as intangible as personality, memory, and emotion can be translated into scent. I designed an interactive experience that allows users to explore different fragrance families and create a scent based on their individual preferences. For me, fragrance is not simply a product, but another form of personal expression.
          </p>
          <a
            href="https://hanzixin45.github.io/scentify/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-white px-7 py-3 text-sm font-medium shadow-soft transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-card"
          >
            Creative Studio →
          </a>
        </div>
      </section>

      {/* THE MEMORY JOURNAL */}
      <section className="container-page pb-28 lg:pb-36 relative">
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-wine font-semibold">
            The Memory Journal
          </p>
          <h2 className="mt-4 serif text-4xl sm:text-5xl font-bold text-ink">
            Scent stories,
            <span className="block text-forest italic">
              bottled with care.
            </span>
          </h2>
          <p className="mt-5 font-display text-lg leading-relaxed text-ink-soft max-w-xl">
            Each fragrance is a carefully sealed memory.
            <br />
            Click on the cards to discover the gentle moments they evoke.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:gap-10">
          {scents.map((s, i) => (
            <div
              key={s.name}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ScentCard scent={s} />
            </div>
          ))}
        </div>
      </section>

      {/* ECHO SCENT BRAND */}
      <section className="container-page pb-28 lg:pb-36">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-forest/10 bg-gradient-to-br from-forest via-[#233A30] to-forest p-10 sm:p-16 lg:p-20 text-cream shadow-lift">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-blob bg-gold/20 blur-3xl animate-blob-morph" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-blob bg-wine/25 blur-3xl animate-blob-morph [animation-delay:-10s]" />

          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-gold-light border border-gold-light/40 rounded-full px-5 py-1.5">
              ♥ {echoScentIntro.brand}
            </span>
            <h2 className="mt-8 serif text-4xl sm:text-6xl font-bold leading-[1.1] text-balance">
              {echoScentIntro.slogan}
            </h2>
            <p className="mt-8 font-display italic text-xl leading-[1.9] text-cream/85">
              {echoScentIntro.paragraph}
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.3em] text-cream/60">
              <span>Handcrafted</span>
              <span>Cruelty-free</span>
              <span>Small batch</span>
              <span>Since 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DESIGN GALLERY */}
      <section className="pb-20 lg:pb-28 relative">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="eyebrow">Visual Design</span>
          <h2 className="mt-3 serif text-3xl sm:text-4xl font-bold text-ink">
            Posters · Merchandise · Visual Identity
          </h2>
          <p className="mt-7 max-w-2xl serif text-xl leading-relaxed text-ink-soft mx-auto">
            I enjoy turning ideas into something people can see, hold, and connect with. From literary-inspired posters to club merchandise and promotional materials, my designs explore how colors, typography, and imagery can give different ideas and communities their own visual identities.
          </p>
        </div>

        {visualDesignProjects.map((project) => (
          <div key={project.id} className="mb-16 last:mb-0">
            <h3 className="serif text-3xl font-bold text-ink mb-4 text-center">
              {project.title}
            </h3>
            {project.description && (
              <p className="max-w-2xl serif text-lg leading-relaxed text-ink-soft mx-auto mb-10 text-center">
                {project.description}
              </p>
            )}
            <div
              className="
                columns-1 sm:columns-2
                gap-6 xl:gap-8
                [column-fill:_balance]
              "
            >
              {project.items.map((item, i) => (
                <div
                  key={item.id}
                  className="mb-6 xl:mb-8 break-inside-avoid animate-fade-in"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <MediaCard
                    imageUrl={item.imageUrl}
                    title={item.title}
                    dateLine={item.year}
                    extraTag={item.organization}
                    description={item.description}
                    onImageClick={handleImageClick}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}