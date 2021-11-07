import React, { Fragment, useState } from "react";
import styles from "@/styles/ListItem.module.css";
import { Badge, Button, Dropdown, DropdownButton } from "react-bootstrap";
import StatusViewer from "./status";
import Importance from "./Importance";
import Task from "./Task";

export const ListItem = ({ item }) => {
  const { id, name, important, status } = item;

  const importancePicker = () => {};

  return (
    <div>
      <Task item={item} />

      <Button variant="outline-danger" className="float-end ms-1">
        <i className="bi bi-trash"></i>
      </Button>

      <StatusViewer statusTask={status} />
      <Importance important={important} />
    </div>
  );
};
