import { useState } from "react";
import styles from "../styles/nav.module.scss";
import Window from "./window";

export default function Nav() {
  const [windows, setWindows] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);

  // セクションがダブルクリックされたときにウィンドウを表示する関数
  const handleSectionDoubleClick = (index: number) => {
    // ウィンドウを表示するために対応するウィンドウの状態を true に設定
    const updatedWindows = [...windows];
    updatedWindows[index] = true;
    setWindows(updatedWindows);
  };

  // ウィンドウが閉じられたときに表示状態を変更する関数
  const handleCloseWindow = (index: number) => {
    const updatedWindows = [...windows];
    updatedWindows[index] = false;
    setWindows(updatedWindows);
  };

  return (
    <nav>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(0)}
      >
        <img
          src="./image/about.png"
          alt="希望職種や勉強中の言語・アプリについて"
        />
        <h1>About</h1>
      </section>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(0)}
      >
        <img src="./image/profile.png" alt="私の自己紹介" />
        <h1>Profile</h1>
      </section>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(0)}
      >
        <img src="./image/works.png" alt="作品一覧" />
        <h1>Works</h1>
      </section>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(0)}
      >
        <img src="./image/contact.png" alt="私の連絡先・SNS" />
        <h1>Contact</h1>
      </section>
      {windows.map(
        (isOpen, index) =>
          isOpen && (
            <Window
              key={index}
              // title={`ウィンドウ ${index + 1}`}
              onClose={() => handleCloseWindow(index)}
            />
          )
      )}{" "}
    </nav>
  );
}
