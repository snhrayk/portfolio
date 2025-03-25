import { useEffect, useState } from "react";
import styles from "../../../styles/herstel.module.scss";
import Florita from "./florita";
import FaveTag from "./faveTag";
import Yurumetabi from "./yurumetabi";
import CandleNight from "./candleNight";
import NameCard from "./nameCard";
import Works from ".";
import WorksSlider from "./worksSlider";

export default function Herstel() {
  const [showWorks, setShowWorks] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
  const [showFaveTag, setShowFaveTag] = useState(false);
  const [showYurumetabi, setShowYurumetabi] = useState(false);
  const [showCandleNight, setShowCandleNight] = useState(false);
  const [showNameCard, setShowNameCard] = useState(false);

  const handleShowWorks = () => {
    setShowWorks(true);
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
  const handleShowCandleNight = () => {
    setShowCandleNight(true);
  };
  const handleShowNameCard = () => {
    setShowNameCard(true);
  };
  const link = (event: React.MouseEvent, href: string, windowName: string) => {
    event.preventDefault();
    window.open(href, windowName);
  };

  if (showWorks) {
    return <Works />;
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
        <p className={styles.selected}>herstel</p>
        <p onClick={handleShowFlorita}>florita</p>
        <p onClick={handleShowFaveTag}>fave#</p>
        <p onClick={handleShowYurumetabi}>ゆるめ旅</p>
        <p onClick={handleShowCandleNight}>キャンドルナイトポスター</p>
        <p onClick={handleShowNameCard}>名刺</p>
      </div>
      <div className={styles.herstelWrap}>
        <div className={styles.sliderWrap}>
          <WorksSlider
            images={[
              "../../../image/herstel.png",
              "../../../image/herstel-logo.png",
              "../../../image/herstel-flyer.png",
              "../../../image/herstel-leaflet.png",
              "../../../image/herstel-set.png",
            ]}
          />{" "}
          <p className={styles.pdfLink}>
            <a
              href="../../../image/herstel.pdf"
              onClick={(event) =>
                link(
                  event,
                  "../../../image/herstel.pdf",
                  "スライドショー拡大表示"
                )
              }
            >
              スライドショー拡大表示
            </a>
          </p>
          <div className={styles.pageExplain}>
            <p>1ページ目:作品全体</p>
            <p>2ページ目:ロゴ</p>
            <p>3ページ目:雑誌の広告・はがきデザイン</p>
            <p>4ページ目:リーフレット</p>
            <p>5ページ目:各セット</p>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            <p className={styles.prize}>+E展 敢闘賞受賞作品</p>
          </div>
          <h3>
            herstel<span>ハーステル</span>
          </h3>
          <p className={styles.date}>23.04~23.08</p>
          <p className={styles.mainExplain}>
            今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。
            <br />
            子育ての疲れに効果的な紅茶をご用意しております。
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.usedApp}>
              <p>Xd</p>
            </div>{" "}
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
              <a
                href="https://snhrayk.github.io/herstel/"
                onClick={(event) =>
                  link(
                    event,
                    "https://snhrayk.github.io/herstel/",
                    "herselのサイトへ"
                  )
                }
              >
                サイトを見る
              </a>
            </p>
          </div>
          <div className={styles.linkWrap}>
            <p>
              <a
                href="https://github.com/snhrayk/herstel.git"
                onClick={(event) =>
                  link(
                    event,
                    "https://github.com/snhrayk/herstel.git",
                    "githubへ"
                  )
                }
              >
                <span>github</span> - herstel
              </a>
            </p>
          </div>
          <div>
            <h4>制作感想</h4>
            <p className={styles.subExplain}>
              紅茶×定期便をテーマに、企画からデザイン・コーディングまで個人で制作しました。
              初めての制作でしたが、自分が考えるものを形にする楽しさを知ることができました。
              今作品を振り返ってみると、webサイトの文字の大きさや写真のチョイス、画像の画質など改善点を多く見つけることができるため、成長を感じます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
