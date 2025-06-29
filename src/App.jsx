import { Outlet } from 'react-router'
import './App.css'
import AboutMe from './Component/About Me/AboutMe'
import ContactInfo from './Component/Contact/ContactInfo'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/Herosection/HeroSection'
import Navbar from './Component/NavBar/Navbar'
import ProjectsSection from './Component/Project Section/ProjectsSection'
import Container from './Component/SharedComponent/Container'
import ThemeToggle from './Component/SharedComponent/ThemeToggle'
import SkillsSection from './Component/Skils Section/skillCategories'

function App() {


  return (
    <>
      <div className='bg-base-200 sticky z-40 top-0 left-0 right-0 dim:border-b-1 dim:border-primary dim:shadow-primary dim:shadow-sm shadow-md'>
        <Navbar />
      </div>

      <Outlet></Outlet>

      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
