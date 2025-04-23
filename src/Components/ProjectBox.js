import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EcommerceDesc : "This is a website were people can pay and buy electronic items and admin can update delete and create products. It is created using React, Redux Toolkit, Expressjs,  Nodejs and MongoDB.",
    EcommerceGithub : "https://github.com/Mrudulpk/Ecommerce_MongoDB-ExpressJS-ReactJS-NodeJS",
    // TindogWebsite : "https://devanshsahni.github.io/tindog/",

    NetflixTMDBDesc : "A Netflix clone using the TMDB API is a web application that mimics Netflix’s interface and functionality by dynamically fetching and displaying movies and TV shows from The Movie Database (TMDB)",
    NetflixTMDBGithub : "https://github.com/Mrudulpk/Netflix-Clone-TMDB",
    // RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    PortfolioDesc:"A portfolio using React.js is a dynamic and responsive web application that showcases an individual's projects and skills using reusable components and modern UI practices.",
    PortfolioGithub: "",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    TodoListDesc:"A To-Do list using React.js is an interactive web app that allows users to add, update, and delete tasks in real-time using React’s state management and component-based architecture.",
    TodoListGithub:"https://github.com/Mrudulpk/TodoList",
    // WigglesWebsite:"https://wiggles.vercel.app/",

    SpotifyDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    SpotifyGithub:"https://github.com/Mrudulpk/Spotify",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    LandingPageDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    LandingPageGithub:"https://github.com/Mrudulpk/LandingPage",
    // WigglesWebsite:"https://wiggles.vercel.app/",

    NetflixCloneDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    NetflixCloneGithub:"https://github.com/Mrudulpk/NetflixClone.github.io",
    // WigglesWebsite:"https://wiggles.vercel.app/",
  
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        {/* <img className='projectPhoto' src={projectPhoto} alt="Project display" />  */}
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox