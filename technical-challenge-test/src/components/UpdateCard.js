import { Navbar, Nav, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import data_image from '../assets/img/ads_image/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const UpdateCard = () => {
    return (
        <Row>
            <Col>
            <Card style={{ width: '18rem',borderRadius:'10px' }}>
            <Card.Img variant="top" src={data_image} />
            <Card.Body style={{backgroundColor:'rgb(36, 66, 129)',color:'white'}}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary" style={{borderRadius:'50px'}}><FontAwesomeIcon icon={ faPlus} /></Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    );
  };
  export default UpdateCard;