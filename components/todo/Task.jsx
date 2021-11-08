import React, { useEffect, useState } from "react";
import styles from "@/styles/Task.module.css";
import { Dropdown } from "react-bootstrap";

const Task = ({ item, changeStatus }) => {
  const statuses = ["active", "suspend", "done", "info"];
  const { id, name, important, status } = item;
  const [statusT, setStatusT] = useState("");

  useEffect(() => {
    changeStatusTask(status);
  }, []);

  const changeStatusTask = (s) => {
    changeStatus(id, s);
    const classNames = statusT;

    switch (s) {
      case "active":
        classNames = styles.active;
        break;
      case "done":
        classNames = styles.done;
        break;
      case "suspend":
        classNames = styles.suspend;
        break;
      case "info":
        classNames = styles.info;
        break;
      default:
        classNames = styles.normal;
        break;
    }
    setStatusT(classNames);
  };
  return (
    <Dropdown
      className="float-start "
      id="dropdown"
      autoClose
      onSelect={(e) => changeStatusTask(e)}
    >
      <Dropdown.Toggle
        className="bg-body text-dark border-0 e-caret-hide"
        id="drop"
      >
        <span className={statusT} /* onClick={() => setStatusT(styles.done)} */>
          {name}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ margin: 0 }}>
        {statuses.map((statusList) => (
          <Dropdown.Item
            eventKey={statusList}
            className="text-dark"
            key={statusList}
          >
            {statusList}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Task;
