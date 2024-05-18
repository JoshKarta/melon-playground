import React, { forwardRef } from "react";
import styles from "../styles.module.css";
import MagneticFramer from "@/components/FramerMagnetic";

const HeaderStickyCursor = forwardRef(function index(props, ref) {
  return (
    <div className={styles.header}>
      <MagneticFramer>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </MagneticFramer>
    </div>
  );
});

export default HeaderStickyCursor;
