import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const RandomPlanet = () => {
  return (
    <Row>
      <Col>
        <Image
          src="/event-default.png"
          layout="responsive"
          alt=""
          width="100"
          height="100"
        ></Image>
      </Col>
      <Col className="col-6">
        Details
        <div className="list-group">
          <div className="list-group-item">detal</div>
          <div className="list-group-item">detal</div>
          <div className="list-group-item">detal</div>
        </div>
      </Col>
    </Row>
  );
};

export default RandomPlanet;
