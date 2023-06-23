import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const Mission = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="shadow-about2">
            <h1 className="universal-color-cl">Mission</h1>
            <hr style={{width:'100px', border: '3px solid rgb(138, 207, 35)'}}/>
            <p>We provide top-notch services to meet your needs
                welcome to our platform <br/>
            </p>
            

          </Col>
        </Row>
      </Container>
    );
  };
  export default Mission;