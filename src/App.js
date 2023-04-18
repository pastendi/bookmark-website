import Download from './components/Download'
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
    </div>
  )
}

export default App
