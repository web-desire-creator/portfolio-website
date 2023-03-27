import './globals.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
export const metadata = {
  title: 'Muhammad Bilal Nadeem',
  description: 'Top IT Professional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
