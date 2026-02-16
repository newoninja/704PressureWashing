export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...params })
}

export function trackPageView(path, title) {
  trackEvent('page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: title,
  })
}

export function trackCallClick(source = 'unknown') {
  trackEvent('phone_click', { source })
}

export function trackFormSubmit(formName = 'contact', status = 'success') {
  trackEvent('form_submit', { form_name: formName, status })
}
