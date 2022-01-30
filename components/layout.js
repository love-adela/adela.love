import Header from './Header'
import Footer from './Footer'

export const siteTitle = "adela.love"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
  </>
  )
}