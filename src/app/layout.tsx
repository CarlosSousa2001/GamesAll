import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daly game - Descubra jogos incríveis',
  description: 'Milhares de jogos disponíveis',
  keywords:['games', 'jogos', 'steam', 'ps4', 'xbox'],
  // openGraph:{
  //   images:[`http://localhost:3000/preview.png`]
  // },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true
    }
  }
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
