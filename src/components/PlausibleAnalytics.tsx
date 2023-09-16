'use client'

import Script from 'next/script'

const PlausibleAnalytics = () => {
  if (process.env.NODE_ENV !== 'production') return <></>
  return <Script strategy="lazyOnload" data-domain="adamfortuna.com" src="https://plausible.io/js/script.js" />
}

export default PlausibleAnalytics
