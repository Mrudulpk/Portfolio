import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EcommerceDesc : "This is a website were people can pay and buy electronic items and admin can update delete and create products. It is created using React, Redux Toolkit, Expressjs,  Nodejs and MongoDB.",
    EcommerceGithub : "https://github.com/Mrudulpk/Ecommerce_MongoDB-ExpressJS-ReactJS-NodeJS",
    

    NetflixTMDBDesc : "A Netflix clone using the TMDB API is a web application that mimics Netflix’s interface and functionality by dynamically fetching and displaying movies and TV shows from The Movie Database (TMDB).",
    NetflixTMDBGithub : "https://github.com/Mrudulpk/Netflix-Clone-TMDB",
    

    PortfolioDesc:"A portfolio using React.js is a dynamic and responsive web application that showcases an individual's projects and skills using reusable components and modern UI practices.",
    PortfolioGithub: "https://github.com/Mrudulpk/Portfolio",
    
    
    TodoListDesc:"A To-Do list using React.js is an interactive web app that allows users to add, update, and delete tasks in real-time using React’s state management and component-based architecture.",
    TodoListGithub:"https://github.com/Mrudulpk/TodoList",
    

    SpotifyDesc:"A Spotify clone using HTML and CSS is a static web page that replicates the visual layout and design of Spotify’s music player interface without dynamic functionality.",
    SpotifyGithub:"https://github.com/Mrudulpk/Spotify",
    
    
    LandingPageDesc:"A landing page using HTML and CSS is a visually appealing, single-page website designed to capture user attention and convey key information or promotions without interactive functionality.",
    LandingPageGithub:"https://github.com/Mrudulpk/LandingPage",
    

    NetflixCloneDesc:"A Netflix clone using HTML and CSS is a static web page that visually replicates the layout and design of Netflix’s homepage without dynamic content or interactivity.",
    NetflixCloneGithub:"https://github.com/Mrudulpk/NetflixClone.github.io",
    
    HarleyDavidsonDesc:"A Harley-Davidson clone using HTML and CSS is a static website that mimics the design and layout of the official Harley-Davidson site, showcasing its style and branding without interactive features.",
    HarleyDavidsonGithub:"https://github.com/Mrudulpk/HarleyDavidsonClone",
   

  
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            
        </div>
    </div>
  )
}

export default  ProjectBox