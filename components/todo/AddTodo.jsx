import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddTodo = () => {
  return (
    <Row className="m-2">
      <h3>Добавить задачу</h3>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="taskName">
              <Form.Label>Имя задачи</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group controlId="importanse">
              <Form.Label>Важность задачи</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default AddTodo;
