import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook, FaGithubSquare, FaInstagram } from 'react-icons/fa'
import {  FaSquareXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'


const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
       data-aos="zoom-in-up" data-aos-duration="1000">
        <a href='#'  className="items">
          <FaInstagram  className='icons'/>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100043739571061' target='_blank' className="items">
          <FaFacebook  className='icons'/>
        </a>
        <a href='' className="items">
          <CiLinkedin  className='icons'/>
        </a>
        <a href='' className="items">
          <FaSquareXTwitter  className='icons'/>
        </a>
        <a href='https://github.com/Mithunyadav291' target='_blank' className="items">
          <FaGithubSquare  className='icons'/>
        </a>
        <a href='mailto:yadavmithun291@gmail.com' target='_blank' className="items">
          <SiGmail  className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact