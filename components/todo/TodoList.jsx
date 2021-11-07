import React from "react";
import styles from "@/styles/ToDoList.module.css";
import { ListItem } from "./ListItem";

const TodoList = ({ props, changeStatus }) => {
  const list = props
    .sort((a, b) => a.important - b.important)
    .map((i) => {
      return (
        <div key={i.id} className={(styles.todoList, "list-group-item")}>
          <ListItem item={i} changeStatus={changeStatus} />
        </div>
      );
    });
  // console.log("props", props);

  return <div className="list-group">{list}</div>;
};
export default TodoList;
