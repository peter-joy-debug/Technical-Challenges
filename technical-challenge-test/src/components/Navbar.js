import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlane,faSearch, faUser,  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../App.css';
const NavBar = () => {
    const [navbarBackground, setNavbarBackground] = useState(false);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
  
      // Change the scroll threshold value as per your requirement
      if (scrollTop > 100) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (

<Navbar variant="dark" expand="lg" fixed="top"  className={navbarBackground ? 'navbar-scroll' : ''}
 style={{
    backgroundColor: navbarBackground ? '#333' : 'transparent',
    transition: 'background-color 0.3s ease',
  }}>
      <Container>
      <Navbar.Brand>
        <Link to="home" smooth duration={500}>
          My Website
        </Link>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="navbar-nav">
             <Nav className="ml-auto menu-position">
               <Nav.Link href="#about" className="menu-color">HOME</Nav.Link>
               <Nav.Link href="#services" className="menu-color">GALLERY</Nav.Link>
               <Nav.Link href="#about" className="menu-color">ABOUT US</Nav.Link>
               <Nav.Link href="#contact" className="menu-color">CONTACT</Nav.Link>
               <Nav.Link href="#blog" className="menu-color">BLOG</Nav.Link>
            </Nav>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav className="ml-auto menu-position">
               <Nav.Link href="#about" className="menu-color"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
               <Nav.Link href="#user" className="menu-color"><FontAwesomeIcon icon={faUser} /></Nav.Link>
               <Nav.Link href="#services" className="menu-color"><FontAwesomeIcon icon={ faShoppingCart} /></Nav.Link>
            </Nav>
        </Navbar.Collapse>
       

      </Container>
    </Navbar>

    );
  };
  export default NavBar;