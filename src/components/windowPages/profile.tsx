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
          <span>デザインエンジニア志望です</span>
          <br />
          デザインもできるフロントエンドエンジニアを目指し、日々勉強し続けています。
        </p>
        <div className={styles.detail}>
          <div className={styles.detailChild}>
            <h3>coding</h3>
            <p>
              コーディングは難しいことも多いですが、授業や課題を通して少しずつ成長しています。
              自分でコードを考えて書いて、それが実際に自分の思い通りに動いたときがコーディングをしている上で感じる楽しい瞬間です。
              <br />
              reactやnext.jsをさらに極めるため現在勉強中です。
            </p>
          </div>
          <div className={styles.detailChild}>
            <h3>design</h3>
            <p>
              キャンドルナイトに向けてポスターを制作した際、自分のポスターが準グランプリに選ばれたことがきっかけで自分のデザインに自信を持つことができました。
              そこからデザインに対してさらに興味を持つようになり、現在はWebサイトやWebアプリに欠かせないUI/UXデザインを勉強中です。
            </p>
          </div>
        </div>
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
              <p>js</p>
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
        <div className={styles.certification}>
          <p>多くの資格を取得しています</p>
          <p>
            全商簿記実務検定1級 / 全商英語検定1級 /
            全商ビジネス計算実務検定試験(電卓)1級 /
            <br />
            全商商業経済検定1級 / 全商情報処理検定2級(プログラミング部門) /
            色彩検定3級
          </p>
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
