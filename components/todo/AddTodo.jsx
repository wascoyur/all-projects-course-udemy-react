import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const AddTodo = ({ addTask }) => {
  return (
    <Row className="m-2">
      <h3>Добавить задачу</h3>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col xs="6">
                <Form.Group controlId="taskname">
                  <Form.Label>Имя задачи</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Form.Group controlId="importanse">
                  <Form.Label>Важность задачи</Form.Label>
                  <Form.Control type="number"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button type="button" className="m-2" onClick={(e) => addTask(e)}>
              add task
            </Button>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default AddTodo;
