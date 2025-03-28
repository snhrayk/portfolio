import { useState } from "react";
import styles from "../styles/nav.module.scss";
import Window from "./window";

export default function Nav() {
  const [windows, setWindows] = useState<Array<boolean>>([false, false, false]);
  const [activeSection, setActiveSection] = useState<number | null>(null); // アクティブなセクションを追跡するための状態
  const [sectionTitles] = useState(["Profile", "Works", "Contact"]); // セクションのタイトルを定義

  const handleSectionDoubleClick = (index: number) => {
    const updatedWindows = [...windows];
    updatedWindows[index] = true;
    setWindows(updatedWindows);
    setActiveSection(index); // アクティブなセクションのインデックスを設定
  };

  const handleCloseWindow = (index: number) => {
    const updatedWindows = [...windows];
    updatedWindows[index] = false;
    setWindows(updatedWindows);
    setActiveSection(null); // ウィンドウを閉じるときにアクティブなセクションをリセット
  };

  return (
    <nav>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(0)} // 必要に応じてインデックスを調整
      >
        <div className={styles.icon}></div>
        {/* <img src="./image/profile.png" alt="私の自己紹介" /> */}
        <h1>Profile</h1>
      </section>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(1)}
      >
        <div className={styles.icon}></div>
        {/* <img src="./image/works.png" alt="作品一覧" /> */}
        <h1>Works</h1>
      </section>
      <section
        className={styles.navChild}
        onDoubleClick={() => handleSectionDoubleClick(2)}
      >
        <div className={styles.icon}></div>
        {/* <img src="./image/contact.png" alt="私の連絡先・SNS" /> */}
        <h1>Contact</h1>
      </section>
      {windows.map(
        (isOpen, index) =>
          isOpen && (
            <Window
              key={index}
              title={sectionTitles[index]} // タイトルを渡す
              activeSection={activeSection} // アクティブなセクションをプロップとして渡す
              onClose={() => handleCloseWindow(index)}
            />
          )
      )}
    </nav>
  );
}
