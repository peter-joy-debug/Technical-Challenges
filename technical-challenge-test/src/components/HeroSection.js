import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
const HeroSection = () => {
    return (
      <Container fluid className="hero-section  hero-position">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1>Welcome to Your Company</h1>
            <p>We provide top-notch services to meet your needs</p>
            <Button variant="primary">Get Started</Button>
          </Col>
        </Row>
      </Container>
    );
  };
  export default HeroSection;