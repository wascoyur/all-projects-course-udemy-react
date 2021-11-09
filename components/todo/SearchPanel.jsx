import React, { Fragment } from "react";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";

const SearchPanel = ({tasks}) => {
  return (
    <Row>
      <Row className="p-3">
        <input
          placeholder="введи чего-нибудь"
          className="form-control"
          aria-label="Basic outlined example"
        />
      </Row>
      <Row>
        <ButtonGroup className="m-2 p-2">
          <Button variant="outline-secondary">Все</Button>
          <Button variant="outline-secondary">Активные</Button>
          <Button variant="outline-secondary">Выполнены</Button>
        </ButtonGroup>
      </Row>
    </Row>
  );
};
export default SearchPanel;
