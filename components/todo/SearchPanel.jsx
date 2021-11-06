import React, { Fragment } from "react";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";

export const SearchPanel = (
  <Row>
    <Col>
      <input
        placeholder="введи чего-нибудь"
        className="form-control"
        aria-label="Basic outlined example"
      />
    </Col>
    <Col>
      <ButtonGroup className="m-2 p-2">
        <Button variant="outline-secondary">Все</Button>
        <Button variant="outline-secondary">Активные</Button>
        <Button variant="outline-secondary">Выполнены</Button>
      </ButtonGroup>
    </Col>
  </Row>
);
