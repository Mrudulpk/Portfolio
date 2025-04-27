import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mrudul PK</h4>
      <h4>Copyright &copy; 2025 MPK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Mrudulpk" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mrudul-pk-5b043b1b9/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:mruthulpk95@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer