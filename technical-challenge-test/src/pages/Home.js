import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCard from '../components/AboutCard';
import MVOSection from '../components/MissionVisionObjectiveSection';
import AdsSection from '../components/AdsSection'
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
      </>
    );
  };
  
  export default Home;