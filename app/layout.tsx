import type { Metadata } from 'next'
import {Providers} from '@/redux/providers'
import './globals.css'
import { Header } from '@/components/Header'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-950 text-white overflow-hidden'>
        <Providers>
          <Header />
        {children}
        </Providers>
        </body>
    </html>
  )
}
