import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import Projects from './Projects.js';
import About from './About.js';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MRUDUL PK</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
            Experienced Web Developer proficient in <b> ReactJS</b>, <b> MongoDB</b>, <b> NodeJS</b>, and
            <b> ExpressJS</b>. <br></br> <br></br>Skilled in <b> full-stack</b> development, focusing on building scalable,
high-performance, and user-centric web applications. <br></br> <br></br>Seeking a challenging
role to apply expertise and contribute innovative solutions to a dynamic and
growth-driven team. <br></br> <br></br>
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
      <Projects />
      <About />
    </div>
  )
}

export default Home