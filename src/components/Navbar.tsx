import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"

const NAV_ITEMS = [
  { label: "About Me", to: "/" },
  { label: "Harp", to: "/harp" },
  { label: "Drama", to: "/drama" },
  { label: "Creative Studio", to: "/scent" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-lg border-b border-forest/10 shadow-[0_2px_20px_rgba(45,74,62,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-forest via-gold to-wine text-white font-serif text-lg shadow-soft transition-transform duration-500 group-hover:scale-110">
            S
          </span>
          <span className="serif text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-forest">
            Sophia Han
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-deep/60 text-forest transition-colors"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative w-5 h-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-cream border-l border-forest/10 shadow-lift p-8 pt-24 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.to}
                style={{ animationDelay: `${i * 60 + 60}ms` }}
                className={menuOpen ? "animate-fade-in" : ""}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `serif text-2xl font-medium transition-colors ${
                      isActive ? "text-forest" : "text-ink hover:text-wine"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                <div className="mt-3 h-px w-full bg-forest/10" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
