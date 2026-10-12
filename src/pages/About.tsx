import React from "react"
import {
  profile,
  bioParagraphs,
  education,
  interestTags,
  aboutSite,
  contacts,
  exploreButtons,
} from "../data/about"

const tagBg: Record<string, string> = {
  forest: "bg-forest/10 text-forest hover:bg-forest hover:text-cream border-forest/20",
  wine: "bg-wine/10 text-wine hover:bg-wine hover:text-cream border-wine/20",
  gold: "bg-gold/10 text-gold-dark hover:bg-gold hover:text-white border-gold/30",
  ink: "bg-ink/5 text-ink-soft hover:bg-ink hover:text-cream border-ink/10",
}

function BlobDecor() {
  return (
    <>
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-blob bg-gold/20 blur-3xl animate-blob-morph" />
      <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-blob bg-forest/10 blur-3xl animate-blob-morph [animation-delay:-6s]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-64 w-64 rounded-blob bg-wine/10 blur-3xl animate-blob-morph [animation-delay:-12s]" />
    </>
  )
}

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <BlobDecor />

      {/* ================= HERO ================= */}
      <section className="container-page relative pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 animate-fade-in">
            <span className="eyebrow">Welcome</span>
            <h1 className="mt-4 serif text-[44px] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl lg:text-[80px] text-balance">
              {profile.heroTitle}
              <span className="block text-forest mt-2">{profile.name}</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg sm:text-xl text-ink-soft font-display">
              {profile.tagline.map((item, i) => (
                <React.Fragment key={item}>
                  <span className="serif italic font-medium">{item}</span>
                  {i < profile.tagline.length - 1 && (
                    <span className="text-gold text-xl">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-base leading-[1.9] text-ink-soft sm:text-lg">
              On harp strings, I hear time; in theater, I live other lives;
              <br />
              in scents and ancient texts, I question faith and identity.
            </p>


          </div>
          <div className="lg:col-span-5 animate-fade-in-delay-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-gold/30 via-wine/10 to-forest/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift border-4 border-white/60">
                <img
                  src={profile.heroImage}
                  alt={profile.name}
                  className="h-full w-full object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-cream/85 backdrop-blur px-5 py-3.5 shadow-soft">
                  <div>
                    <p className="serif text-sm font-semibold text-forest">
                      {profile.name} · {profile.nameCn}
                    </p>
                    <p className="text-xs text-ink-mute mt-0.5">
                      Portfolio · 2025
                    </p>
                  </div>
                  <span className="h-9 w-9 rounded-full bg-gradient-to-br from-forest to-gold text-white flex items-center justify-center text-xs shadow-soft">
                    ♪
                  </span>
                </div>
              </div>
              {/* floating tag */}
              <div className="absolute -top-4 -right-3 rotate-3 rounded-2xl bg-wine text-cream px-4 py-2 shadow-card text-sm font-medium">
                ✦ Harpist since 10
              </div>
              <div className="absolute -bottom-4 -left-4 -rotate-2 rounded-2xl bg-forest text-cream px-4 py-2 shadow-card text-sm font-medium">
                🎭 Theater Lover
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BIO ================= */}
      <section id="bio" className="container-page relative py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">About This Site</span>
            <h2 className="section-title mt-4 text-forest">
              About This Site
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="serif text-lg leading-[2] text-ink-soft">
              This website is a collection of things I love, things I've created, and moments I want to remember.
            </p>
            <p className="serif text-lg leading-[2] text-ink-soft">
              From playing the harp onstage to bringing stories to life through theater, I've always enjoyed finding different ways to express myself. Here, you'll find recordings of my performances, glimpses behind the scenes of our Drama Club, and little creative experiments like Scentify.
            </p>
            <p className="serif text-lg leading-[2] text-ink-soft">
              Some of these experiences have taken years of practice, while others began with a spontaneous idea. Together, they offer a glimpse into who I am beyond the classroom.
            </p>
            <p className="serif text-lg leading-[2] text-ink-soft">
              I hope you enjoy exploring!
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION + TAGS ================= */}
      <section className="container-page relative py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Education card */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Education</span>
            <div className="mt-6 space-y-5">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="group relative overflow-hidden rounded-3xl border border-forest/10 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest/10 via-gold/10 to-wine/10 text-3xl shadow-inner">
                      {edu.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="serif text-2xl font-semibold text-ink">
                          {edu.school}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-ink-soft mt-0.5">{edu.schoolEn}</p>
                      <p className="mt-2 text-sm text-forest font-medium">
                        {edu.degree}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Interest tags + about site */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="eyebrow">Interests</span>
              <div className="mt-6 flex flex-wrap gap-3">
                {interestTags.map((t) => (
                  <span
                    key={t.label}
                    className={`tag-pill cursor-default border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${
                      tagBg[t.color] ?? tagBg.ink
                    }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-forest via-forest-light to-forest p-7 text-cream shadow-card">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                About This Site
              </span>
              <p className="serif text-lg leading-relaxed mt-4 text-cream/95">
                {aboutSite}
              </p>
              <div className="mt-5 h-px w-full bg-gold/40" />
              <div className="mt-4 flex items-center justify-between text-xs text-cream/70">
                <span>Last updated</span>
                <span className="font-serif italic">Made with ♥ & music</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="container-page relative py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-forest/10 bg-white p-8 sm:p-12 lg:p-16 shadow-card">
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-blob bg-wine/10 blur-3xl animate-blob-morph" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-blob bg-gold/15 blur-3xl animate-blob-morph [animation-delay:-8s]" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 serif text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Let's stay in
                <span className="block text-wine italic">touch.</span>
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-sm">
                If you enjoy my performances, theater work, or fragrance creations, feel free to reach out — perhaps one day, we'll meet in a concert hall, theater, or a fragrance exhibition.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col rounded-[1.75rem] bg-cream-deep/60 p-3 sm:p-4 shadow-inner gap-2">
                {contacts.map((c, i) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-5 rounded-2xl bg-white/70 px-5 py-4 transition-all duration-500 hover:bg-forest hover:-translate-y-0.5 hover:shadow-card"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 via-wine/10 to-forest/15 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {c.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute transition-colors group-hover:text-cream/60">
                        {c.label}
                      </p>
                      <p className="serif text-lg font-medium text-ink truncate transition-colors group-hover:text-cream">
                        {c.value}
                      </p>
                    </div>
                    <span className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-forest/5 text-forest transition-all group-hover:bg-white group-hover:text-wine">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
