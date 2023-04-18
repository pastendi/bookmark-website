import Download from './components/Download'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
