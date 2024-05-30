"use client"
import LineItem from "./components/LineItem";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [items] = useState([1,2,3,4,5,6])
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      {items.map((item,i)=><LineItem key={""+i} item={""+item}></LineItem>)}
      
    </main>
  );
}
