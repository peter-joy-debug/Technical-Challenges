import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCard from '../components/AboutCard';
import MVOSection from '../components/MissionVisionObjectiveSection';
import AdsSection from '../components/AdsSection'
import SideSection from '../components/SideDataSection';
import UpdatesSection from '../components/UpdatesSection';
import FooterSection from '../components/FooterSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

import '../App.css';

const Home = () => {

    return (
        <>
      <div className="cover-background" style={{marginBottom:'50px'}}>
        <div className="hero-color cover-inner">
        <NavBar />
        <br/>
        <br/>

        <HeroSection />
        {/* Add more sections/components here */}

        <AboutCard/>
        </div>
      
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{marginTop:'0px',zIndex:'2',backgroundColor:'white'}}>
        <MVOSection/>
      </div>
        <br/>
        <br/>
      <div style={{marginTop:'0px',zIndex:'2',backgroundColor:'white'}}>
        <AdsSection/>
      </div>
      <br/>
      <div style={{backgroundColor:'grey',width:'99.3%',borderRadius:'10px'}}>
        <SideSection/>
      </div>
      <br/>
      <div style={{marginTop:'0px',zIndex:'2',backgroundColor:'white'}}>
        <UpdatesSection/>
      </div>

      <div style={{backgroundColor:'rgb(219, 219, 219)',width:'99.3%',borderRadius:'10px'}}>
        <ScrollToTopButton/>
        <FooterSection/>
      </div>
      </>
    );
  };
  
  export default Home;