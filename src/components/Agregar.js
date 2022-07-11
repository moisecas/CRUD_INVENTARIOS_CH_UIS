import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
 
const Agregar = () => {
  return (
    <Container>
      <Form >
        <Row className="mb-5">
          <Col>
            <Form.Control
              type="text"
              placeholder="Describe elemento"
              id="formDescripcion"
            />
          </Col>
          <Col>
            <Form.Control
              type="file"
              placeholder="Añade archivo"
              
            />
          </Col>
          <Col>
            <Button type="submit"> Agregar Elemento</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
}

export default Agregar 