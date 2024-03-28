import { useEffect, useState } from "react";
import styles from "../../../styles/Yurumetabi.module.scss";
import Florita from "./florita";
import FaveTag from "./faveTag";
import CandleNight from "./candleNight";
import NameCard from "./nameCard";
import Works from ".";
import Herstel from "./herstel";
import WorksSlider from "./worksSlider";

export default function Yurumetabi() {
  const [showWorks, setShowWorks] = useState(false);
  const [showHerstel, setShowHerstel] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
  const [showFaveTag, setShowFaveTag] = useState(false);
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
  const handleShowFaveTag = () => {
    setShowFaveTag(true);
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
  if (showHerstel) {
    return <Herstel />;
  }
  if (showFlorita) {
    return <Florita />;
  }
  if (showFaveTag) {
    return <FaveTag />;
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
        <p onClick={handleShowFaveTag}>fave#</p>
        <p className={styles.selected}>ゆるめ旅</p>
        <p onClick={handleShowCandleNight}>キャンドルナイトポスター</p>
        <p onClick={handleShowNameCard}>名刺</p>
      </div>
      <div className={styles.yurumetabiWrap}>
        <div className={styles.sliderWrap}>
          <WorksSlider images={["../../../image/yurumetabi.png"]} />{" "}
          <div className={styles.pdfLinkWrap}>
            <p className={styles.pdfLink}>
              <a
                href="../../../image/yurumetabi.pdf"
                onClick={(event) =>
                  link(
                    event,
                    "../../../image/yurumetabi.pdf",
                    "スライドショー拡大表示"
                  )
                }
              >
                スライドショー拡大表示
              </a>
            </p>
            <p className={styles.pdfLink}>
              <a
                href="../../../image/yurumetabi-proposal.pdf"
                onClick={(event) =>
                  link(
                    event,
                    "../../../image/yurumetabi-proposal.pdf",
                    "企画書"
                  )
                }
              >
                企画書
              </a>
            </p>
          </div>
          <div className={styles.pageExplain}>
            <p>1ページ目:作品全体</p>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            <p className={styles.prize}>第7回専門学校HTML5作品アワード入選</p>
            <p className={styles.prize}>+E展コンセプト賞受賞</p>
          </div>
          <h3>ゆるめ旅</h3>
          <p className={styles.date}>$23.10~23.02</p>
          <p className={styles.mainExplain}>
            遠回りをして目的地の着くルート案内機能と見つけたスポットを撮影して共有できるスポット共有機能を合わせた新しいルート案内アプリです。
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
          </div>
          <div className={styles.btnWrap}>
            <p className={styles.term}>1年後期</p>
            <p className={styles.siteBtn}>
              <a
                href="https://yurumetabi.vercel.app/"
                onClick={(event) =>
                  link(event, "https://yurumetabi.vercel.app/", "ゆるめ旅")
                }
              >
                アプリを見る
              </a>
            </p>
          </div>
          <div className={styles.linkWrap}>
            <p>
              <a
                href="https://github.com/kusanohatsumi/yurumetabi.git"
                onClick={(event) =>
                  link(
                    event,
                    "https://github.com/kusanohatsumi/yurumetabi.git",
                    "githubへ"
                  )
                }
              >
                <span>github</span> - ゆるめ旅
              </a>
            </p>
          </div>
          <div>
            <h4>制作感想</h4>
            <p className={styles.subExplain}>
              エンジニアとしてマイページの制作を担当しました。
              Next.jsやfirebaseはこの作品で初めて触りました。
              初めてで分からないことだらけでしたが先輩に丁寧に教えてもらったおかげで、なんとか形にすることができました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
