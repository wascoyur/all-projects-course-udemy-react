import React, { Fragment } from "react";
import { Badge, Row } from "react-bootstrap";

const Counter = () => {
  return (
    <Row>
      <Badge bg="secondary" className="m-2">
        Задач всего 55{" "}
      </Badge>
      <Badge bg="success" className="m-2">
        Задач выполнено 4
      </Badge>
      <Badge bg="warning" className="m-2">
        Задач активных 5
      </Badge>
    </Row>
  );
};

export default Counter;
