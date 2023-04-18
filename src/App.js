import Download from './components/Download'
import Faq from './components/Faq'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
    </div>
  )
}

export default App
