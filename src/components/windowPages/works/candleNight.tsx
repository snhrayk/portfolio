import { useEffect, useState } from "react";
import styles from "../../../styles/candleNight.module.scss";
import Florita from "./florita";
import FaveTag from "./faveTag";
import Yurumetabi from "./yurumetabi";
import NameCard from "./nameCard";
import Works from ".";
import Herstel from "./herstel";

export default function CandleNight() {
  const [showWorks, setShowWorks] = useState(false);
  const [showHerstel, setShowHerstel] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
  const [showFaveTag, setShowFaveTag] = useState(false);
  const [showYurumetabi, setShowYurumetabi] = useState(false);
  const [showNameCard, setShowNameCard] = useState(false);

  const handleShowWorks = () => {
    setShowWorks(true);
  };
  const handleShowHerstel = () => {
    setShowHerstel(true);
  };
  const handleShowFlorita = () => {
    setShowFlorita(true);
  };
  const handleShowFaveTag = () => {
    setShowFaveTag(true);
  };
  const handleShowYurumetabi = () => {
    setShowYurumetabi(true);
  };
  const handleShowNameCard = () => {
    setShowNameCard(true);
  };

  if (showWorks) {
    return <Works />;
  }
  if (showHerstel) {
    return <Herstel />;
  }
  if (showFlorita) {
    return <Florita />;
  }
  if (showFaveTag) {
    return <FaveTag />;
  }
  if (showYurumetabi) {
    return <Yurumetabi />;
  }
  if (showNameCard) {
    return <NameCard />;
  }

  return (
    <div className={styles.container}>
      <header>
        <h1 onClick={handleShowWorks}>
          <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />{" "}
        </h1>
      </header>
      <div className={styles.worksList}>
        <h2>作品一覧</h2>
        <p onClick={handleShowHerstel}>herstel</p>
        <p onClick={handleShowFlorita}>florita</p>
        <p onClick={handleShowFaveTag}>fave#</p>
        <p onClick={handleShowYurumetabi}>ゆるめ旅</p>
        <p className={styles.selected}>キャンドルナイトポスター</p>
        <p onClick={handleShowNameCard}>名刺</p>
      </div>
      <div className={styles.candleNightWrap}>
        <div className={styles.ImgWrap}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            <p className={styles.prize}>準グランプリ受賞</p>
          </div>
          <h3>キャンドルナイトポスター</h3>
          <p className={styles.date}>$23.10~23.11</p>
          <p className={styles.mainExplain}>
            毎年中崎町で開催されるキャンドルナイト。そのイベントのポスターを制作しました。
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.usedApp}>
              <p>Ps</p>
            </div>{" "}
            <div className={styles.usedApp}>
              <p>Ai</p>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <p className={styles.term}>1年後期</p>
            <p className={styles.siteBtn}>サイトはありません</p>
          </div>
          <div>
            <h4>制作感想</h4>
            <p className={styles.subExplain}>
              グラフィックデザイン。キャンドルナイトの温かさを感じるようなデザインに仕上げました。
              自分がデザインしたチラシが学校や街中に貼られている光景を見たときは、とても感動しました。
              この作品から、デザインの楽しさを改めて感じることができました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
