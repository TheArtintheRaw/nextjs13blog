import 'tailwindcss/tailwind.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="dns-prefetch" href="https://survey-dashboard-omega.vercel.app">
          <link rel="preconnect" href="https://survey-dashboard-omega.vercel.app" crossorigin>
      </head>
      <body className="bg-white text-black">
        {children}

        <Script src="https://survey-dashboard-omega.vercel.app/tracker-optimized.min.js" data-site-id="test-site-1" async />
      </body>
    </html>
  )
}
