import React, { Children } from "react";
import "ress/dist/ress.min.css";
// import "./styles/App.css";
import styles from "./styles/App.module.scss";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Close from "./components/parts/close";
import ZoomUp from "./components/parts/zoomUp";
import ZoomDown from "./components/parts/zoomDown";
import Msg from "./components/msg";
import Window from "./components/window";

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Nav />
        <Msg />
        {/* <Window /> */}
      </main>
      <Footer />
    </div>
  );
}

// 他のページでも使用できるようにする
export default App;
