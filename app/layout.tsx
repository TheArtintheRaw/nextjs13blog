import 'tailwindcss/tailwind.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <script src="https://survey-dashboard-omega.vercel.app/tracker.min.js" data-site-id="test-site-1" async></script>
      <head />
      <body className="bg-white text-black">{children}
    
      </body>
      
    </html>
  )
}
