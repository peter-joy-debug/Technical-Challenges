import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const Objective = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="shadow-about2">
            <h1 className="universal-color-cl">Objective</h1>
            <hr style={{width:'200px', border: '3px solid green'}}/>
            <p>We provide top-notch services to meet your needs
                welcome to our platform <br/>
            </p>
            

          </Col>
        </Row>
      </Container>
    );
  };
  export default Objective;