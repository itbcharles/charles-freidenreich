import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charles Freidenreich — Business + Technology",
  description: "Business student building research agents and systems. Eagle Scout with experience in strategic automation and team leadership.",
  keywords: ["business", "technology", "automation", "research", "leadership", "eagle scout"],
  authors: [{ name: "Charles Freidenreich" }],
  creator: "Charles Freidenreich",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charlesfreidenreich.com",
    title: "Charles Freidenreich — Business + Technology",
    description: "Business student building research agents and systems. Eagle Scout.",
    siteName: "Charles Freidenreich",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Freidenreich — Business + Technology",
    description: "Business student building research agents and systems. Eagle Scout.",
    creator: "@charlesfreid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://charlesfreidenreich.com" />
      </head>
      <body className="antialiased">
        {children}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Charles Freidenreich",
              "jobTitle": "Business Student & Technology Builder",
              "description": "Business student building research agents and systems. Eagle Scout with experience in strategic automation and team leadership.",
              "url": "https://charlesfreidenreich.com",
              "sameAs": [
                "https://linkedin.com/in/charlesfreidenreich",
                "https://github.com/charlesfreidenreich"
              ],
              "knowsAbout": ["Business Strategy", "System Automation", "Research Systems", "Team Leadership", "Python", "TypeScript"],
              "alumniOf": {
                "@type": "Organization",
                "name": "Boy Scouts of America"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
