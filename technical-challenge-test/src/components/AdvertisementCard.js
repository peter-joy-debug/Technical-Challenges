import { Navbar, Nav, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import data_image from '../assets/img/ads_image/data.png';
const AdsCard = () => {
    return (
<Card className="bg-dark text-white" style={{border:'4px solid rgb(138, 207, 35)',borderRadius:'10px'}}>
      <Card.Img src={data_image} alt="Card image" />
      <Card.ImgOverlay>

        <Card.Title>Ads section</Card.Title>
        <Card.Text>

        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    );
  };
  export default AdsCard;