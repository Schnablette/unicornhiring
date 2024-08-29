import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Unicorn Hiring',
    default: 'Unicorn Hiring - Startup Hiring Assistant',
  },
  description: 'The fastest way for startups to hire multi-talented...talent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-wildberry-900 antialiased',
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
