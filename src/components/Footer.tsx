export default function Footer() {
  return (
    <footer className="mt-24 border-t border-forest/10 bg-cream-deep/40">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="serif text-sm text-ink-soft flex items-center gap-2">
          © {new Date().getFullYear()} Sophia Han
          <span className="text-wine">·</span>
          Made with <span className="text-wine">❤</span>
        </p>
        <p className="text-xs text-ink-mute flex items-center gap-2">
          <span aria-hidden className="text-gold">🎻</span>
          Harp · Drama · Scent
          <span aria-hidden className="text-gold">✨</span>
        </p>
      </div>
    </footer>
  )
}
