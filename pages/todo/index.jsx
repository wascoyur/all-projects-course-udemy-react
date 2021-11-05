import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { Timer } from "../../components/Timer";
import { SearchPanel } from "../../components/todo/SearchPanel";
import { AppHeader } from "../../components/todo/AppHeader";
import { TodoList } from "../../components/todo/TodoList";

const Todo = () => {
  return (
    <div className={styles.container}>
      {AppHeader}
      <div className={styles.main}>
        <Timer />
        {SearchPanel}
        {TodoList}
      </div>
    </div>
  );
};

export default Todo;
