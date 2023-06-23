import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const SideTwo = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="">
            <h1 className="" style={{color:'white'}}>Side Two</h1>
            <p style={{color:'white'}}>We provide top-notch services <br/> to meet your needs
                welcome to our platform <br/>
            </p>

            <Button variant="light" style={{backgroundColor:'grey',color:'white',borderRadius:'30px'}}>Lorem Ipsum</Button>
            

          </Col>
        </Row>
      </Container>
    );
  };
  export default SideTwo;