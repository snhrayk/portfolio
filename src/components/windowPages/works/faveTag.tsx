import { useEffect, useState } from "react";
import styles from "../../../styles/faveTag.module.scss";
import Florita from "./florita";
import Yurumetabi from "./yurumetabi";
import CandleNight from "./candleNight";
import NameCard from "./nameCard";
import Works from ".";
import Herstel from "./herstel";

export default function FaveTag() {
  const [showWorks, setShowWorks] = useState(false);
  const [showHerstel, setShowHerstel] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
  const [showYurumetabi, setShowYurumetabi] = useState(false);
  const [showCandleNight, setShowCandleNight] = useState(false);
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
  const handleShowYurumetabi = () => {
    setShowYurumetabi(true);
  };
  const handleShowCandleNight = () => {
    setShowCandleNight(true);
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
  if (showYurumetabi) {
    return <Yurumetabi />;
  }
  if (showCandleNight) {
    return <CandleNight />;
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
        <p className={styles.selected}>fave#</p>
        <p onClick={handleShowYurumetabi}>ゆるめ旅</p>
        <p onClick={handleShowCandleNight}>キャンドルナイトポスター</p>
        <p onClick={handleShowNameCard}>名刺</p>
      </div>
      <div className={styles.herstelWrap}>
        <div className={styles.herstelSliderWrap}>
          {/* <div
            id="thumbnail-carousel"
            className={styles.thumbnailSlider}
            aria-label="サムネイルスライダー。各サムネイルをクリックすると、メインのスライダーが切り替わります"
          >
            <div className={styles.thumbnailWrap}>
              <ul className={styles.thumbnails}>
                <li className={styles.thumbnailImg}>
                  <img src="../../../image/herstel.png" alt="作品全体" />
                </li>
                <li className={styles.thumbnailImg}>
                  <img src="../../../image/florita.png" alt="作品全体" />
                </li>
                <li className={styles.thumbnailImg}>
                  <img src="../../../image/faveTag.png" alt="作品全体" />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.back} onClick={backBtn}></div>
          <div className={styles.next} onClick={nextBtn}></div> */}
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}></div>
          <h3>
            fave#<span>フェイブタグ</span>
          </h3>
          <p className={styles.date}>$23.11~24.02</p>
          <p className={styles.mainExplain}>
            洋楽好きに向けたコミュニティWebアプリ。自分の好きな洋楽アーティストごとに作られたコミュニティスペースで、他のユーザーと交流できます。
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.usedApp}>
              <p>Ps</p>
            </div>{" "}
            <div className={styles.usedApp}>
              <p>Ai</p>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <p className={styles.term}>1年前期</p>
            <p className={styles.siteBtn}>
              <a href="#">アプリを見る</a>
            </p>
          </div>
          <div>
            <h4>制作感想</h4>
            <p className={styles.subExplain}>
              私が洋楽好きであることから、洋楽好きの方に向けたコミュニティアプリを作りたいと思い、このwebアプリを制作しました。
              限られた期間の中でどうやって効率よく作業を進めるかをもっと意識するべきだったこと、firebaseやspotifyAPIを利用しやすくするためにNext.jsを使用するべきだったこと反省しています。
              反省点からNext.jsでこの作品を制作し直す予定です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
