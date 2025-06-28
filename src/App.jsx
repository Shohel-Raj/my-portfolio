import './App.css'
import AboutMe from './Component/About Me/AboutMe'
import HeroSection from './Component/Herosection/HeroSection'
import Navbar from './Component/NavBar/Navbar'
import Container from './Component/SharedComponent/Container'
import ThemeToggle from './Component/SharedComponent/ThemeToggle'

function App() {


  return (
    <>
      <div className='bg-base-200 sticky z-40 top-0 dim:border-b-1 dim:border-primary dim:shadow-primary dim:shadow-sm shadow-md'>
        <Navbar />
      </div>

      <div id='hero' className='my-2'>
        <Container>
          <HeroSection></HeroSection>
        </Container>
      </div>

      <div id='about'>
        <Container>
          <AboutMe></AboutMe>
        </Container>
      </div>
    </>
  )
}

export default App
