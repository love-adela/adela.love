import Header from './Header'
import Footer from './Footer'

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