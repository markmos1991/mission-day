import '../styles/global.css';
import { Inter } from 'next/font/google';

import Header from './components/headerSection';
import Footer from './components/footer';

import { loadComponents } from 'next/dist/server/load-components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mission Day',
  description: 'pARTy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
        
    </html>
  )
}
