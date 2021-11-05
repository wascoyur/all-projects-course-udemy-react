import React from "react";
import styles from "@/styles/ListItem.module.css";

export const ListItem = ({ nameItem, important = 3 }) => {
  //   console.log("text", important);

  return (
    <div
      className={
        important == 1
          ? styles.high
          : important == 2
          ? styles.medium
          : styles.normal
      }
    >
      {" "}
      {nameItem}
    </div>
  );
};
