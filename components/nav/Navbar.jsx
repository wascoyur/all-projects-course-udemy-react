import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">All Projects</Link>
      <Link href="/todo">Todo</Link>
      <Link href="/stardb">Звездные войны</Link>
      <Link href="/redux">Redux</Link>
    </div>
  );
};

export default Navbar;
