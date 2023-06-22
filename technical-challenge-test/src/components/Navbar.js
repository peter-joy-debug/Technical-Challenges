import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faPlane,faSearch, faUser,  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
const NavBar = () => {
    return (

<Navbar variant="dark" expand="lg" fixed="top" className="navbar-position">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faPlane} /></Navbar.Brand>
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