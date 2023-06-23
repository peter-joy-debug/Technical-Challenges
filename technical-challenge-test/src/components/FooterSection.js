import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import UpdateCard from './UpdateCard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faLinkedin,faYoutube } from "@fortawesome/free-brands-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../App.css';
const FooterSection = () => {
    return (
      <Container fluid>
        <Row >
        <Col lg={2} className="ads-adjust">
        </Col>
          <Col lg={3} className="ads-adjust">
            <br/>
      
          <ul type='none' className="footer-links">
                        <li> <h4 className="universal-color-cl">Subscribe to our weekly <br/>newsletter</h4></li>
                        <li>

                        <Form>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="email"
                                    style={{borderRadius:'30px'}}

                                />
                                </Col>
                                <Col xs="auto">
                                <Button variant="primary" className="mb-2" style={{backgroundColor:'rgb(138, 207, 35)',border:'none',borderRadius:'30px',marginLeft:'-80px'}}>submit</Button>
                                </Col>
                            </Row>
                        </Form>

                        </li>
            </ul>
        
          </Col>
          <Col lg={5} className="">
            
            <Container >

            <br/>
                <Row>
                <Col lg={4} className="ads-adjust">
                   
                    <ul type='none' className="footer-links">
                        <li> <h4 className="universal-color-cl">Reach Us</h4></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </Col>
                <Col lg={4} className="ads-adjust">
                    <ul type='none' className="footer-links">
                        <li><h4 className="universal-color-cl">Be Social </h4></li>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faYoutube} /> YouTube Channel</a></li>
                    </ul>
                </Col>
                <Col lg={4} className="ads-adjust">
                
                    <ul type='none' className="footer-links">
                        <li> <h4 className="universal-color-cl">Quick Links</h4></li>
                        <li><a href="">Link 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                    </ul>
                </Col>
                </Row>
            </Container>
          </Col>
          <Col lg={2} className="text-center">
   
          </Col>
        </Row>
        <br/>
        <br/>
        <Row style={{textAlign:'center'}}>
            <Container>
                <Container>
                <hr/>
                </Container>
            </Container>
            <Col>
            <p>&copy;<i> 2023 Rwanda, All right Reserved.</i> | Privacy policy</p> 
            </Col>
        </Row>
        <br/>
    
      </Container>
    );
  };
  export default FooterSection;