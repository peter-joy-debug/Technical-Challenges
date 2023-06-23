import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const AboutCard = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={2} className="text-center">
            
          </Col>
          <Col lg={8} className="shadow-about">
            <h1 className="universal-color-cl">Welcome to Your Company</h1>
            <hr style={{width:'240px', border: '3px solid rgb(138, 207, 35)'}}/>
            <p>We provide top-notch services to meet your needs
                welcome to our platform <br/>
                We provide top-notch services to meet your needs
                welcome to our platform <br/>
                We provide top-notch services to meet your needs
                welcome to our platform <br/>
            </p>
            

          </Col>
          <Col lg={2} className="text-center">
   
          </Col>
        </Row>
      </Container>
    );
  };
  export default AboutCard;