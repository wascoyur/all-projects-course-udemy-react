import React, { useState } from "react";
import styles from "@/styles/Task.module.css";

const Task = ({ item }) => {
  const { id, name, important, status } = item;
  const [statusT, setStatusT] = useState("");

  const classNames = statusT;

  const changeStatusTask = () => {};
  const statusts = ["active", "suspend", "done", "info"];
  return (
    <span className={classNames} onClick={() => setStatusT(styles.done)}>
      {name}
    </span>
  );
};

export default Task;
