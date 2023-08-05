import NavBar from '@/components/shared/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'Vocabulary to speech',
  description: 'Transfering vocabulary to speech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-no-repeat'>
        <div className='container bg-white dark:bg-slate-600'>
          <header>
            <NavBar />
          </header>
          <main style={{minHeight: 'calc(100vh - 40px)'}}>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
