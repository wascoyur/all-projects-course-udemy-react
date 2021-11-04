import React from "react";
import styles from "@/styles/Home.module.css";

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
        {SearchPanel}
        {TodoList}
      </div>
    </div>
  );
};

export default Todo;
