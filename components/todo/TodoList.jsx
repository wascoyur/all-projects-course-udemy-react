import React from "react";
import styles from "@/styles/Home.module.css";
import { ListItem } from "./ListItem";

export const TodoList = (
  <div className={styles.card}>
    <ListItem nameItem="Средней важности пункт списка" important="medium" />
    <ListItem nameItem="Важный элемент списка" important="high" />
    <ListItem nameItem="Элемент обычной важности" />
  </div>
);
