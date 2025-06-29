import React from 'react';
import Container from '../Component/SharedComponent/Container';
import HeroSection from '../Component/Herosection/HeroSection';
import AboutMe from '../Component/About Me/AboutMe';
import SkillsMarquee from '../Component/Skils Section/skillCategories';
import ProjectsSection from '../Component/Project Section/ProjectsSection';
import ContactInfo from '../Component/Contact/ContactInfo';

const Home = () => {
  return (
    <>
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
          <SkillsMarquee></SkillsMarquee>
        </Container>
      </div>
      <div id='projects'>
        <Container>
          <ProjectsSection></ProjectsSection>
        </Container>
      </div>
      <div id='contact'>
        <Container>
          <ContactInfo></ContactInfo>
        </Container>
      </div>
    </>
  );
};

export default Home