import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { Timer } from "../../components/Timer";

const AppHeader = <div className={styles.title}>ТуДушка</div>;
const SearchPanel = <input placeholder="введи чего-нибудь" />;
const TodoList = (
  <ul className={styles.code}>
    <li>Номер один</li>
    <li>Номер два</li>
  </ul>
);
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
