import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import SideOne from './SideOne.js';
import SideTwo from './SideTwo.js';
import '../App.css';
const SideSection = () => {
    return (
      <Container fluid style={{padding:'130px 0px 130px 0px'}}>
        <Row className="justify-content-center">
          <Col lg={2} className="text-center">
            
          </Col>
          <Col lg={8} className="">
            <Container>
                <Row>
                <Col lg={6}><SideOne/></Col>
                <Col lg={6}><SideTwo/></Col>
                </Row>
            </Container>
          </Col>
          <Col lg={2} className="text-center">
   
          </Col>
        </Row>
      </Container>
    );
  };
  export default SideSection;