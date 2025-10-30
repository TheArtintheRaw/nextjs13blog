export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://survey-dashboard-omega.vercel.app" />
        <link rel="preconnect" href="https://survey-dashboard-omega.vercel.app" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Rival Survey Widget - Optimized */}
        <Script 
          src="https://survey-dashboard-omega.vercel.app/tracker-optimized.min.js" 
          data-site-id="test-site-1" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
