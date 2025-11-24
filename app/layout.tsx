import 'tailwindcss/tailwind.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />

      <body className="bg-white text-black">
        {children}
        
        {/* Rival Survey Widget - Optimized */}
        <Script 
          src="https://survey-dashboard-omega.vercel.app/tracker-optimized.min.js" 
          data-site-id="nextblog" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
