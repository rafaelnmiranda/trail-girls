import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Trail Girls - Uma experiência esportiva de conexão com a natureza',
  description: 'Uma experiência esportiva de conexão com a natureza feita especialmente para mulheres. Movimento de empoderamento feminino no trail run.',
  keywords: 'trail run, mulheres, esporte, natureza, empoderamento feminino, corrida de trilha',
  authors: [{ name: 'Trail Girls' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Trail Girls - Movimento de mulheres no trail run',
    description: 'Uma experiência esportiva de conexão com a natureza feita especialmente para mulheres.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

