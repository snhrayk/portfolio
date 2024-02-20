import { useState } from "react";
import styles from "../styles/window.module.scss";
import Close from "./parts/close";
import ZoomDown from "./parts/zoomDown";
import ZoomUp from "./parts/zoomUp";
import About from "./windowPages/about";
import Profile from "./windowPages/profile";

export default function Window(props: any) {
  return (
    <div className={styles.windowWrap}>
      <div className={styles.bar}>
        <p>{props.title}</p>
        <div className={styles.btnWrap}>
          <ZoomDown />
          <ZoomUp />
          <Close onClick={props.onClose} />
        </div>
      </div>
      <div className={styles.pageArea}>
        {/* <About /> */}
        <Profile />
      </div>
    </div>
  );
}
