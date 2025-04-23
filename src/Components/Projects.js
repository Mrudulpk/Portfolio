import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        
        <ProjectBox projectPhoto={WigglesImage} projectName="Ecommerce" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="NetflixTMDB" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={TindogImage} projectName="TodoList" />
        <ProjectBox projectPhoto={TindogImage} projectName="Spotify" />
        <ProjectBox projectPhoto={TindogImage} projectName="LandingPage" />
        <ProjectBox projectPhoto={TindogImage} projectName="NetflixClone" /> 

      </div>

    </div>
  )
}

export default Projects