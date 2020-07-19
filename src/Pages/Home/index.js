import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import placeholder from './Images/placeholder.png';

import "./index.css";

function Home() {
  return (
    <Container fluid className="p-0 homeContainer">
      <Row className="p-0 m-0 bg-transparent">
        <Col style={{ padding: "10px 25px"}} className="bg-transparent">
          <Card className=" mx-auto mt-5 bg-light" style={{ margin: '0 auto' }}>
            <Card.Header className="bg-dark text-light">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={2} md={4} style={{ margin: "0 auto", padding: "50px 15px "}} className="bg-transparent" >
        <Col className="bg-transparent">
          <Card style={{ marginBottom: "10px"}}>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={placeholder} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={placeholder} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={placeholder} />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={placeholder} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
