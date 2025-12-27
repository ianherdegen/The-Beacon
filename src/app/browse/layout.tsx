import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Beacon | Hyperlocal Live Gaming | Browse',
  description: 'Browse all Beacon games - Blockbusters and Community games.',
}

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

