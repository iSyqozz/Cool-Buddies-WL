import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

const inter = Space_Mono({ subsets: ['latin'], weight:'400' })

const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.PORT || 3000}` :
  'https://' + process.env.VERCEL_URL as string;

  export const metadata: Metadata = {
    title: 'Wallet Checker',
    description: 'Cool Buddies Wallet Checker',
    viewport: { width: "device-width", initialScale: 1 },
    metadataBase: new URL(baseUrl),
    keywords: "NFT, SOL, Cool Buddies, art, mint, free, demarco",
    creator: 'iSy',
    publisher: 'iSy',
    generator: 'Next.js',
    applicationName: 'Cool Buddies',
    authors: [
      {
        name: 'iSy',
        url: 'https://linktr.ee/isyqozz512'
      },
      {
        name: 'Demarco',
        url: 'https://twitter.com/itsnot_demarco'
      }
    ],
    openGraph: {
      title: 'Wallet Checker',
      description: 'Cool Buddies Wallet Checker.',
      siteName: 'Cool Buddies',
    },
    twitter: {
      title: 'Wallet Checker',
      description: 'Cool Buddies Wallet Checker.',
      card: 'summary',
      creator: '@iSyqozz512',
    },
  
  }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' [background:_#d9e9f3]'}>{children}</body>
    </html>
  )
}
