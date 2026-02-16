import { useEffect } from 'react'
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
import BlogPostPage from './pages/blog/BlogPostPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import QuotePage from './pages/QuotePage'
import { locationPosts, services } from './data/siteData'
import { trackPageView } from './utils/analytics'

const staticRoutes = {
  '/': HomePage,
  '/our-story': OurStoryPage,
  '/services': ServicesPage,
  '/our-work': WorkPage,
  '/areas-served': AreasPage,
  '/blog': BlogPage,
  '/faqs': FaqPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPage,
  '/terms': TermsPage,
  '/quote': QuotePage,
}

function resolvePage(pathname) {
  const cleanedPath = pathname.replace(/\/$/, '') || '/'

  if (staticRoutes[cleanedPath]) {
    const Page = staticRoutes[cleanedPath]
    return <Page />
  }

  const service = services.find((item) => cleanedPath === `/${item.slug}`)
  if (service) {
    return <ServiceDetailPage service={service} canonicalPath={`/${service.slug}`} />
  }

  const post = locationPosts.find((item) => cleanedPath === `/blog/${item.slug}`)
  if (post) {
    return <BlogPostPage post={post} />
  }

  return <NotFoundPage />
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'

  useEffect(() => {
    const timer = window.setTimeout(() => {
      trackPageView(pathname, document.title)
    }, 0)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return (
    <div className="app-shell">
      <AnalyticsLoader />
      <Nav />
      <main className="site-main">{resolvePage(pathname)}</main>
      <Footer />
    </div>
  )
}
