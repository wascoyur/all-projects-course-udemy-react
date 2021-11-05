import Navbar from "@/components/nav/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.title}>
      Udemi course
      <div>Personal implementation</div>
    </div>
  );
}
