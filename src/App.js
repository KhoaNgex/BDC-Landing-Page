import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Header from './components/Header'
import Features from './components/Features'
import Vision from "./components/Vision";
import Mission from './components/Mission';
import MissionCarousel from './components/MissionCarousel';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return <div className='overflow-hidden'>
    <Header/>
    <Hero/>
    <Features/>
    <Vision/>
    <Mission/>
    <MissionCarousel/>
  </div>;
};

export default App;
