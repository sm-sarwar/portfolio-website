import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMeSection from './AboutMe';
import EducationSection from '../Components/EducationSection';
import SkillsSection from '../Components/SkillSection';
import ProjectsSection from './Projects';
import ContactSection from './ContactSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMeSection></AboutMeSection>
            <SkillsSection></SkillsSection>
            <EducationSection></EducationSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;