import styles from "../../styles/profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profWrap}>
      <div className={styles.profTop}>
        <div className={styles.imgWrap}></div>
        <div className={styles.textTop}>
          <h1>profile card</h1>
          <p className={styles.name}>
            name<span>砂原彩花</span>
          </p>
          <div className={styles.schWrap}>
            <p>education</p>
            <p className={styles.sch}>
              ECCコンピュータ専門学校 <br />
              <span>マルチメディア研究学科 / Webデザインコース</span>
            </p>
          </div>
          <p className={styles.from}>
            hometown<span>兵庫県神戸市</span>
          </p>
          <p className={styles.birth}>
            date of birth<time dateTime="2005-02-21">2005/02/21</time>
          </p>
          <p className={styles.graduation}>Graduation expected in 2026</p>
        </div>
      </div>
      <section className={styles.about}>
        <h2>about</h2>
        <p>
          <span>フロントエンドエンジニア志望。</span>
          <br />
          コーディングは難しいことも多いですが、授業や課題を通して少しずつ成長しています。
          <br />
          自分で考えてコードを書いて、それが実際に自分の思い通りに動いたときがコーディングをしている上で感じる楽しい瞬間です。
          <br />
          また、デザインも好きなため、デザインもできるエンジニアを目指しています。
        </p>
      </section>
      <section className={styles.skills}>
        <h2>skills</h2>
        <div className={styles.skillsWrap}>
          <div className={styles.engineer}>
            <h3>programming language</h3>
            <div className={styles.engWrap}>
              <p>html</p>
              <p>css</p>
              <p>scss</p>
              <p>java script</p>
              <p>react</p>
              <p>next.js</p>
              <p>firebase</p>
            </div>
          </div>
          <div className={styles.software}>
            <h3>software</h3>
            <div className={styles.softWrap}>
              <div>
                <p>Ai</p>
              </div>
              <div>
                <p>Ps</p>
              </div>
              <div>
                <img src="../../image/figma.png" alt="figmaのアイコン" />
              </div>
              <div>
                <p>Ae</p>
              </div>
              <div>
                <p>Pr</p>
              </div>
              <div>
                <p>Id</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.myFav}>
        <h2>my favorite</h2>
        <div className={styles.childWrap}>
          <div className={styles.favChild}>
            <div></div>
            <p>
              I love ramen!!!
              <br />
              <span>好きな食べ物:ラーメン</span>
            </p>
          </div>
          <div className={styles.favChild}>
            <div></div>
            <p>
              listening to pop music
              <br />
              <span>趣味①:洋楽を聴くこと</span>
            </p>
          </div>
          <div className={styles.favChild}>
            <div></div>
            <p>
              Colored pencil drawing
              <br />
              <span>特技:色鉛筆画(特に人物画)</span>
            </p>
          </div>
          <div className={styles.favChild}>
            <div></div>
            <p>
              watching movies
              <br />
              <span>趣味②:映画・ドラマ鑑賞</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
