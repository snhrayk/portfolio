import styles from "../../styles/zoomDown.module.scss";

export default function ZoomDown() {
  const cursor = {
    cursor: 'url("/image/cursor.png"), auto',
  };
  return (
    <>
      <button className={styles.zoomDownBtn} style={cursor}>
        <img src="/image/zoomDown.svg" alt="ウィンドウを縮小" />
      </button>
    </>
  );
}
