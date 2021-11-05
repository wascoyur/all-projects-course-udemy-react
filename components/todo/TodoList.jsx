import React from "react";
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/ListItem.module.css";
import { ListItem } from "./ListItem";

const TodoList = ({ props }) => {
  const list = props
    .sort((a, b) => a.important - b.important)
    .map((i, ind) => {
      return (
        <div key={ind} className="list-group-item">
          <ListItem nameItem={i.name} important={i.important} />
        </div>
      );
    });
  // console.log("list", list);

  return <div className="list-group">{list}</div>;
};
export default TodoList;
