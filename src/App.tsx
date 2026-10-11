import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Harp from "./pages/Harp"
import Drama from "./pages/Drama"
import Scent from "./pages/Scent"
import { useEffect } from "react"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/harp"
            element={
              <PageWrapper>
                <Harp />
              </PageWrapper>
            }
          />
          <Route
            path="/drama"
            element={
              <PageWrapper>
                <Drama />
              </PageWrapper>
            }
          />
          <Route
            path="/scent"
            element={
              <PageWrapper>
                <Scent />
              </PageWrapper>
            }
          />

          <Route
            path="*"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
