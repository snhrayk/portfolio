import styles from "../styles/window.module.scss";
import Close from "./parts/close";
import ZoomDown from "./parts/zoomDown";
import ZoomUp from "./parts/zoomUp";

export default function Window(props: any) {
  return (
    <div className={styles.windowWrap}>
      <div className={styles.bar}>
        {/* <p>Profile</p> */}
        <p>{props.title}</p>
        <div className={styles.btnWrap}>
          <ZoomDown />
          <ZoomUp />
          <Close />
        </div>
      </div>
      <div className={styles.pageArea}>{props.children}</div>
    </div>
  );
}
