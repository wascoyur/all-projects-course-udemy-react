import React from "react";
import styles from "@/styles/ToDoList.module.css";
import { ListItem } from "./ListItem";

const TodoList = ({ props }) => {
  const list = props
    .sort((a, b) => a.important - b.important)
    .map((i, ind) => {
      return (
        <div key={i.id} className={(styles.todoList, "list-group-item")}>
          <ListItem item={i} />
        </div>
      );
    });
  // console.log("props", props);

  return <div className="list-group">{list}</div>;
};
export default TodoList;
