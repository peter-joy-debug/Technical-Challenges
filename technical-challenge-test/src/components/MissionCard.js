import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

const Mission = () => {
  const [loading, setLoading] = useState(true);
  const [missionData, setMissionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/mission/');
        setMissionData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMissionData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col className="shadow-about2">
          <h1 className="universal-color-cl">Mission</h1>
          <hr style={{ width: '100px', border: '3px solid rgb(138, 207, 35)' }} />
          {missionData && (
            <p>
              {missionData.mission}
              <br />
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;