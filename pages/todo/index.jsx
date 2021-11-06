import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { Timer } from "../../components/Timer";
import { SearchPanel } from "../../components/todo/SearchPanel";
import { AppHeader } from "../../components/todo/AppHeader";
import TodoList from "../../components/todo/TodoList";
import Counter from "@/components/todo/Counter";

const Todo = () => {
  const data = [
    { name: "Выучить реакт", important: 2 },
    { name: "Получить оффер", important: 1 },
    { name: "Cредней важности пункт списка", important: 2 },
    { name: "Важный элемент списка", important: 1 },
    { name: "Элемент обычной важности", important: 3 },
  ];
  return (
    <div className={styles.container}>
      {AppHeader}
      <div className={styles.main}>
        <Timer />
        <Counter />
        {SearchPanel}

        <TodoList props={data} />
      </div>
    </div>
  );
};

export default Todo;
