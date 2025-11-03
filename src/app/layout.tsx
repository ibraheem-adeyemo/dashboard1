import '../styles/globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js + Tailwind + Redux + Auth boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
