import './App.css'
import AboutMe from './Component/About Me/AboutMe'
import ContactInfo from './Component/Contact/ContactInfo'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/Herosection/HeroSection'
import Navbar from './Component/NavBar/Navbar'
import Container from './Component/SharedComponent/Container'
import ThemeToggle from './Component/SharedComponent/ThemeToggle'
import SkillsSection from './Component/Skils Section/skillCategories'

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
      <div id='skills'>
        <Container>
          <SkillsSection></SkillsSection>
        </Container>
      </div>
      <div id='contact'>
        <Container>
            <ContactInfo></ContactInfo>
        </Container>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
