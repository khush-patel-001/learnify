import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Focus on Student Experience</h2>
        <p>At Learnify, we believe that a comprehensive education extends beyond the classroom. Our students have the opportunity to engage in a wide range of extracurricular activities With state-of-the-art facilities, dedicated faculty, and a supportive student body, we provide an enriching environment for personal and intellectual growth.
        </p>
      </div>
    </div>
  )
}

export default About
