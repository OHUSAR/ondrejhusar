import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import profilovka from "./profilovka.jpg";
import img1 from "./img/futsys-hp.png";
import img2 from "./img/futsys-match.png";
import img3 from "./img/futsys-betting.png";
import img4 from "./img/futsys-group.png";
import seasyGraph from "./img/seasy.jpg";

import textVersions from "./text.json";

import TerminalLine from "./components/terminal-line";

const App = () => {
  const [skLang, setSkLang] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(
    Boolean(window.document.body.classList.contains(styles.lightTheme))
  );

  const text = skLang ? textVersions.sk : textVersions.en;

  useEffect(() => {
    window.document.body.classList.remove("no-transition");
  });

  return (
    <div className={styles.wrapper}>
      <h1>
        <div>
          <span>Ondrej Husár</span>
          <button
            className={styles.langButton}
            onClick={() => {
              setSkLang((prev) => !prev);
            }}
          >
            {skLang ? <span>[ EN ]</span> : <span>[ SK ]</span>}
          </button>
        </div>
        <button
          className={styles.themeButton}
          onClick={() => {
            if (isLightTheme) {
              window.document.body.classList.remove(styles.lightTheme);
              setIsLightTheme(false);
            } else {
              window.document.body.classList.add(styles.lightTheme);
              setIsLightTheme(true);
            }
          }}
        >
          {isLightTheme ? <span>&#9899;</span> : <span>&#9898;</span>}
        </button>
      </h1>
      <div className={styles.about}>
        <div className={styles.aboutBox} style={{ height: 200 }}>
          <img src={profilovka} alt="profile-pic" className={styles.image} />
        </div>
        <div className={styles.aboutBox}>
          <div className={styles.aboutRow}>
            <span className={styles.bold}>{text.email}:&nbsp;</span>
            <span>ondrej[at]husar[dot]sk</span>
          </div>
          <div className={styles.aboutRow}>
            <span className={styles.bold}>{text.mobile}:&nbsp;</span>
            <span>+421 903 780 012</span>
          </div>
          <div className={styles.aboutRow}>
            <span className={styles.bold}>{text.birthdate}:&nbsp;</span>
            <span>1994</span>
          </div>
          <div className={styles.aboutRow}>
            <span className={styles.bold}>{text.residency}:&nbsp;</span>
            <span>Bratislava</span>
          </div>

          <div className={styles.aboutRow}>
            <span className={styles.bold}>{text.title}:&nbsp;</span>
            <span>{text.mgr}</span>
          </div>
        </div>
      </div>

      <TerminalLine line={text.titleWorkingExperience} />
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.years}>2022 - present</div>
          <div className={styles.school}>
            <span className={styles.bold}>Sportradar</span>
            <br />
            <br />
            {text.sportradarText}
            <br />
            <br />
            {text.sportradarTech}
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.years}>2021 - 2022</div>
          <div className={styles.school}>
            <span className={styles.bold}>Seasy GmbH</span>
            <br />
            <br />
            {text.seasyText}
            <br />
            <br />
            <a href="https://www.seasy.at" target="_blank" rel="noreferrer">
              {text.seasyLink}
            </a>
            &nbsp;{text.andor}&nbsp;
            <a href={seasyGraph} target="_blank" rel="noreferrer">
              {text.seasyGraph}
            </a>
            <br />
            <br />
            {text.seasyTech}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.years}>2016 - 2021</div>
          <div className={styles.school}>
            <span className={styles.bold}>{"4networks SK&CZ, s.r.o."}</span>
            <br />
            <br />
            {text["4nets"]}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.modrastrecha.sk/"
            >
              modrastrecha.sk
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.modrastrecha.cz/"
            >
              modrastrecha.cz
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mojasvadba.zoznam.sk/"
            >
              mojasvadba.zoznam.sk
            </a>
            ,{" "}
            <a target="_blank" rel="noreferrer" href="https://www.beremese.cz/">
              beremese.cz
            </a>{" "}
            a{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://www.zahrada.sk/"
            >
              zahrada.sk
            </a>
            .
            <br />
            <br />
            {text["4netsTech"]}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.years}>2015 - 2016</div>
          <div className={styles.school}>
            <span className={styles.bold}>{text.kuberSro}</span>
            <br />
            <br />
            {text.kuberSroText}
            <br />
            <br />
            {text.kuberSroTech}
          </div>
        </div>
      </div>

      <TerminalLine line={text.titleEducation} />
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.years}>2017 - 2019</div>
          <div className={styles.school}>
            <span className={styles.bold}>{text.fmfi}</span>
            <br />
            {text.fmfiMain}
            <br />
            {text.fmfiAI}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.years}>2014 - 2017</div>
          <div className={styles.school}>
            <span className={styles.bold}>{text.fmfi}</span>
            <br />
            {text.fmfiAin}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.years}>2009 - 2014</div>
          <div className={styles.school}>
            <span className={styles.bold}>{text.gjh}</span>
            <br />
            {text.gjh5}
          </div>
        </div>
      </div>
      <TerminalLine line={text.titleWorkingSkillsShort} />

      <div className={styles.table}>
        <div className={styles.row}>
          <div>
            <div className={styles.tldrSectionTitle}>{text.veryGood}</div>
            <ul>
              <li className={styles.buzzword}>Python</li>
              <li className={styles.buzzword}>Django, Flask</li>
              <li className={styles.buzzword}>Typescript</li>
              <li className={styles.buzzword}>ReactJS</li>
              <li className={styles.buzzword}>GraphQL, Apollo, Relay</li>
              <li className={styles.buzzword}>REST</li>
              <li className={styles.buzzword}>{text.linux}</li>
              <li className={styles.buzzword}>Git</li>
            </ul>
            <div className={styles.tldrSectionTitle}>{text.good}</div>
            <ul>
              <li className={styles.buzzword}>Flutter</li>
              <li className={styles.buzzword}>Webpack</li>
              <li className={styles.buzzword}>Elasticsearch</li>
              <li className={styles.buzzword}>{text.seo}</li>
              <li className={styles.buzzword}>{text.uml}</li>
            </ul>
            <div className={styles.tldrSectionTitle}>{text.ok}</div>
            <ul>
              <li className={styles.buzzword}>{text.AI}</li>
              <li className={styles.buzzword}>{text.numpy}</li>
              <li className={styles.buzzword}>Docker</li>
              <li className={styles.buzzword}>{text.UX}</li>
              <li className={styles.buzzword}>
                {text.otherProgrammingLanguages}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TerminalLine line={text.titleWorkingSkillsLong} />
      <div className={styles.table}>
        <div className={styles.row}>
          <div dangerouslySetInnerHTML={{ __html: text.seasyJob }} />
        </div>
        <div className={styles.row}>
          <div dangerouslySetInnerHTML={{ __html: text.fournetsJob }} />
        </div>
        <div className={styles.row}>
          <div dangerouslySetInnerHTML={{ __html: text.school }} />
        </div>
        <div className={styles.row}>
          <div>
            <div dangerouslySetInnerHTML={{ __html: text.freeTime }} />
            <div className={styles.images}>
              <img className={styles.img} src={img1} alt="img1" />
              <img className={styles.img} src={img2} alt="img2" />
              <img className={styles.img} src={img3} alt="img3" />
              <img className={styles.img} src={img4} alt="img4" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <TerminalLine line={text.titleExit} hideCursor={true} speed={0} />
        <TerminalLine line={"exit"} />
        <br />
        <br />
        <div className={styles.m104}>
          <div className={styles.row}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
