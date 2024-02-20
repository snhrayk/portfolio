import React, { Children } from "react";
import "ress/dist/ress.min.css";
import "./styles/App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Close from "./components/parts/close";
import ZoomUp from "./components/parts/zoomUp";
import ZoomDown from "./components/parts/zoomDown";
import Msg from "./components/msg";
import Window from "./components/window";

function App() {
  const app = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#C2EFDB",
    cursor: 'url("./image/cursor.png"), auto',
  };
  const main = {
    width: "100%",
    height: "91.8vh",
  };

  return (
    <div style={app}>
      <main style={main}>
        <Nav />
        {/* <Msg /> */}
        <Window />
      </main>
      <Footer />
    </div>
  );
}

// 他のページでも使用できるようにする
export default App;
