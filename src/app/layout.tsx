import Footer from '@/layouts/Footer/Footer'
import Header from '@/layouts/Header/Header'
import '@/styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
