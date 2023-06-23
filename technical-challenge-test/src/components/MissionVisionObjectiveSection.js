import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import Mission from './MissionCard.js';
import Vision from './VisionCard.js';
import Objective from './ObjectiveCard.js'
import '../App.css';
const MVOSection = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={2} className="text-center">
            
          </Col>
          <Col lg={8} className="">
            <Container>
                <Row>
                <Col lg={4}><Mission/></Col>
                <Col lg={4}><Vision/></Col>
                <Col lg={4}><Objective/></Col>
                </Row>
            </Container>
          </Col>
          <Col lg={2} className="text-center">
   
          </Col>
        </Row>
      </Container>
    );
  };
  export default MVOSection;