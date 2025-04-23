import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Mrudul PK</b> and I am from Kerala, India. I'm a
            passionate and ambitious <b>BE Computer Science</b> graduate with a strong
            inclination towards web development and cutting-edge technologies.
            My journey in the world of <b>software engineering</b> has been nothing
            short of exciting and fulfilling, and I'm currently seeking an
            opportunity to apply and enhance my skills in the <b>MERN stack</b> through
            a developer position. <br></br> <br></br> Throughout my academic projects and personal
            endeavors, I have honed my abilities in creating robust and
            user-centric web applications. My experience in front-end
            development with <b>React js</b> and back-end development with <b>Node js</b> and 
            <b>Express js</b> has allowed me to build seamless, intuitive, and responsive
            user interfaces that deliver exceptional user experiences.
          
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Python" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
        <Skills skill="Html" />
        <Skills skill="Css" />

      </div>
    </>
  );
};

export default About;
