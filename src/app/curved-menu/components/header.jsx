"use client";
import React, { useState } from "react";
import styles from "../styles.module.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";

export default function CurvedMenuHeader() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed right-0 m-5 z-20 w-14 h-14 rounded-full bg-neutral-950 dark:bg-white cursor-pointer flex items-center justify-center"
        // className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
