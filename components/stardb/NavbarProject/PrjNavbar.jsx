import React from "react";
import { Row } from "react-bootstrap";

const PrjNavbar = () => {
  return (
    <nav className="header">
      <Row>
        <div className="btn btn-outline" href="/stardb">
          Звездные войны
        </div>
        <ul className="d-flex justify-content-around">
          <li className="btn border text-info">Персонажи</li>
          <li className="btn border text-info">Планеты</li>

          <li className="btn border text-info">Корабли</li>
        </ul>
      </Row>
    </nav>
  );
};

export default PrjNavbar;
