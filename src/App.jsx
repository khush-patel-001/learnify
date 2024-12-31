import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='GALLERY' title='Campus Photos'/>
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial />
        <Title subTitle='CONTACT US' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      <ScrollToTop />
    </div>
  )
}

export default App
