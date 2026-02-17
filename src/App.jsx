import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AnalyticsLoader from './components/AnalyticsLoader'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import OurStoryPage from './pages/OurStoryPage'
import ServicesPage from './pages/ServicesPage'
import AreasPage from './pages/AreasPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import ServiceRoutePage from './pages/ServiceRoutePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import QuotePage from './pages/QuotePage'
import TestQuotePage from './pages/TestQuotePage'
import BlogPostRoutePage from './pages/blog/BlogPostRoutePage'
import { trackPageView } from './utils/analytics'

export default function App() {
  const location = useLocation()
  const pathname = location.pathname.replace(/\/$/, '') || '/'
  const isQuotePage = pathname === '/quote' || pathname === '/test'

  useEffect(() => {
    const timer = window.setTimeout(() => {
      trackPageView(pathname, document.title)
    }, 0)

    return () => window.clearTimeout(timer)
  }, [pathname])

  return (
    <div className="app-shell">
      <AnalyticsLoader />
      {!isQuotePage && <Nav />}
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-work" element={<WorkPage />} />
          <Route path="/areas-served" element={<AreasPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostRoutePage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/test" element={<TestQuotePage />} />
          <Route path="/:serviceSlug" element={<ServiceRoutePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isQuotePage && <Footer />}
    </div>
  )
}
