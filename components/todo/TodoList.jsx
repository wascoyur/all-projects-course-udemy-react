import React from "react";
import styles from "@/styles/ToDoList.module.css";
import { ListItem } from "./ListItem";

const TodoList = ({ props }) => {
  const list = props
    .sort((a, b) => a.important - b.important)
    .map((i, ind) => {
      return (
        <div key={ind} className={(styles.todoList, "list-group-item")}>
          <ListItem nameItem={i.name} important={i.important} />
        </div>
      );
    });
  // console.log("list", list);

  return <div className="list-group">{list}</div>;
};
export default TodoList;
