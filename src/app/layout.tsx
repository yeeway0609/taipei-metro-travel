import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { ViewTransitions } from 'next-view-transitions'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'

export const revalidate = 0
export const dynamic = 'force-dynamic'

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '捷伴旅行',
  description: '2025 台北捷運黑客松參賽作品',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <ViewTransitions>
      <NextIntlClientProvider>
        <html lang={locale}>
          <body className={`${notoSansTC.variable}`}>
            <div className="max-w-app pb-navbar mx-auto min-h-dvh w-full bg-white antialiased">
              {children}
              <NavBar />
            </div>
          </body>
        </html>
      </NextIntlClientProvider>
    </ViewTransitions>
  )
}
