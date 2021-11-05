import React from "react";
import styles from "@/styles/ListItem.module.css";

export const ListItem = ({ nameItem, important = "normal" }) => {
  //   console.log("text", nameItem);

  return (
    <div
      className={
        important == "high"
          ? styles.high
          : important == "medium"
          ? styles.medium
          : styles.normal
      }
    >
      {" "}
      {nameItem}
    </div>
  );
};
