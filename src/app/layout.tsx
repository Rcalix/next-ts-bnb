import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone ts',
}

const font = Nunito({
  subsets: ['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={font.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
