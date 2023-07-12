import '../styles/global.css';
import { Roboto } from 'next/font/google';

import Header from './components/headerSection';
import Footer from './components/footer';

import { loadComponents } from 'next/dist/server/load-components'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        </body>
        
    </html>
  )
}
