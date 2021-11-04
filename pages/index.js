import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Destructing from "./Destructing";

export default function Home() {
  const fib = [1, 2, 3, 45, 6];
  const [a, b, c] = fib;
  return (
    <div className={styles.title}>
      Home
      <Destructing />
    </div>
  );
}
