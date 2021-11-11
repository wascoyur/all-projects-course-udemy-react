import React from "react";

const PrjNavbar = () => {
  return (
    <nav className="header">
      <div>
        <div className="btn btn-outline" href="/stardb">
          Звездные войны
        </div>
        <ul className="d-flex justify-content-around">
          <li className="btn border text-info">Персонажи</li>
          <li className="btn border text-info">Планеты</li>

          <li className="btn border text-info">Корабли</li>
        </ul>
      </div>
    </nav>
  );
};

export default PrjNavbar;
