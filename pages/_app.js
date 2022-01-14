import Navbar from '../components/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer className="footerStyle">
        by Musiur
      </footer>
    </>
  )
}

export default MyApp
