import React from 'react';
import ProjectBox from './ProjectBox';
import Ecommerce from '../images/Ecommerce.png'
import HarleyDavidson from '../images/HarleyDavidson.png'
import LandingPage from '../images/LandingPage.png'
import NetflixClone from '../images/NetflixClone.png'
import NetflixTMDB from '../images/NetflixTmdb.png'
import Portfolio from '../images/Portfolio.png'
import Spotify from '../images/Spotify.png'
import TodoList from '../images/TodoList.png'



const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
      
        <ProjectBox projectPhoto={Ecommerce} projectName="Ecommerce" />
        <ProjectBox projectPhoto={NetflixTMDB} projectName="NetflixTMDB" />
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={NetflixClone} projectName="NetflixClone" /> 
        <ProjectBox projectPhoto={Spotify} projectName="Spotify" />
        <ProjectBox projectPhoto={LandingPage} projectName="LandingPage" />
        <ProjectBox projectPhoto={HarleyDavidson} projectName="HarleyDavidson" /> 
        <ProjectBox projectPhoto={TodoList} projectName="TodoList" />

      </div>

    </div>
  )
}

export default Projects