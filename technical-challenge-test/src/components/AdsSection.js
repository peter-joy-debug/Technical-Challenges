import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import AdsCard from './AdvertisementCard.js';
import '../App.css';
const AdsSection = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={2} className="text-center">
            
          </Col>
          <Col lg={8} className="">
            
            <Container >
            <h1 className="universal-color-cl">TELLUS ERAT ALIQUAM<br/>BLANDIT ETIAM</h1>
            <hr style={{width:'200px', border: '3px solid green'}}/>
            <br/>
                <Row>
                <Col lg={4} className="ads-adjust"><AdsCard/></Col>
                <Col lg={4} className="ads-adjust"><AdsCard/></Col>
                <Col lg={4} className="ads-adjust"><AdsCard/></Col>
                </Row>
            </Container>
          </Col>
          <Col lg={2} className="text-center">
   
          </Col>
        </Row>
      </Container>
    );
  };
  export default AdsSection;