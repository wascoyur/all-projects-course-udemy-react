import React, { useState } from "react";
import styles from "@/styles/ListItem.module.css";
import { Button } from "react-bootstrap";

export const ListItem = ({ item }) => {
  const { name, important, status, changeStatus } = item;

  const [statusT, setStatusT] = useState(styles.normal);

  const classNames = statusT;

  const setActive = () => {
    setStatusT(styles.done);
  };

  console.log("status", status);
  return (
    <div className={() => changeStatus(id)}>
      <span onClick={setActive}>
        {name}/{status}
      </span>
      <Button variant="outline-danger" className="float-end ms-1">
        <i className="bi bi-trash"></i>
      </Button>
      <Button variant="outline-success" className="float-end ms-1">
        <i className="bi bi-exclamation"></i>
      </Button>
      <Button variant="outline-info" className="ms-1 float-end">
        <i className="bi bi-pause-circle" />
      </Button>
    </div>
  );
};
