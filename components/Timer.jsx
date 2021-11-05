import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

export const Timer = () => {
  let time = new Date().toLocaleTimeString();
  let [ctime, setCTime] = useState();

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  return time ? <div className={styles.card}> {ctime}</div> : null;
};
