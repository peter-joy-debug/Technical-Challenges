import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const SideOne = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="">
            <h1 className="" style={{color:'white'}}>Side One</h1>
            <p style={{color:'white'}}>We provide top-notch services <br/> to meet your needs
                welcome to our platform <br/>
            </p>
            <Button variant="primary" style={{backgroundColor:'rgb(138, 207, 35)',border:'none',borderRadius:'30px'}}>Lorem Ipsum</Button>

          </Col>
        </Row>
      </Container>
    );
  };
  export default SideOne;