import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import UpdateCard from './UpdateCard.js';
import '../App.css';
const UpdatesSection = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={2} className="text-center">
            
          </Col>
          <Col lg={8} className="">
            
            <Container >
            <h1 className="universal-color-cl">LATEST STORIES AND <br/>UPDATES</h1>
            <hr style={{width:'200px', border: '3px solid rgb(138, 207, 35)'}}/>
            <br/>
                <Row>
                <Col lg={4} className="ads-adjust"><UpdateCard/></Col>
                <Col lg={4} className="ads-adjust"><UpdateCard/></Col>
                <Col lg={4} className="ads-adjust"><UpdateCard/></Col>
                </Row>
            </Container>
          </Col>
          <Col lg={2} className="text-center">
   
          </Col>
        </Row>
        <br/>
        <br/>
        <Row style={{textAlign:'center'}}>
            <Col>
            <Button variant="primary" style={{backgroundColor:'rgb(138, 207, 35)',border:'none',borderRadius:'30px'}}>Load More</Button>
            </Col>
        </Row>
        <br/>
        <br/>
        <br/>
      </Container>
    );
  };
  export default UpdatesSection;