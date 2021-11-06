import React, { useState } from "react";
import styles from "@/styles/ListItem.module.css";
import { Button } from "react-bootstrap";
import StatusViewer from "./status";

export const ListItem = ({ item }) => {
  const { id, name, important, status, changeStatus } = item;

  const [statusT, setStatusT] = useState(styles.normal);

  const classNames = statusT;

  const setActive = () => {
    setStatusT(styles.done);
  };

  
  return (
    <div className={classNames}>
      <span
        onClick={() => {
          changeStatus(id);
        }}
      >
        {name}/{status}
      </span>
      <Button variant="outline-danger" className="float-end ms-1">
        <i className="bi bi-trash"></i>
      </Button>
      <Button variant="outline-success" className="float-end ms-1">
        <i className="bi bi-exclamation"></i>
      </Button>
      <StatusViewer statusTask={status} />
    </div>
  );
};
