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
        <link rel="dns-prefetch" href="https://survey-dashboard-omega.vercel.app" />
        <link rel="preconnect" href="https://survey-dashboard-omega.vercel.app" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-black">
        {children}

        <Script 
          src="https://survey-dashboard-omega.vercel.app/tracker-optimized.min.js"
          data-site-id="c5edf465-8050-43ca-9fbe-7b1859f8f73b"
          data-api-base="https://survey-dashboard-omega.vercel.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
