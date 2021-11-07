import React, { Fragment, useState } from "react";
import styles from "@/styles/ListItem.module.css";
import { Badge, Button, Dropdown, DropdownButton } from "react-bootstrap";
import StatusViewer from "./status";
import Importance from "./Importance";

export const ListItem = ({ item }) => {
  const { id, name, important, status } = item;

  const [statusT, setStatusT] = useState("");

  const classNames = statusT;

  const setActive = () => {
    // setStatusT(styles.done);
  };
  const importancePicker = () => {};

  return (
    <div className={classNames}>
      <span onClick={() => setStatusT(styles.done)}>{name}</span>
      <Button variant="outline-danger" className="float-end ms-1">
        <i className="bi bi-trash"></i>
      </Button>

      <StatusViewer statusTask={status} />
      <Importance important={important} />
    </div>
  );
};
