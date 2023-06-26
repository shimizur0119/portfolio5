import { useEffect, useRef } from "react";

import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DateTime } from "luxon";
import { useRecoilValue } from "recoil";
import Rellax from "rellax";

import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";
import SimpleTitle from "../components/SimpleTitle";
import TechnologiesList from "../components/TechnologiesList";
import { darkModeState } from "../states/atoms";
import { client } from "../utils/contentful";

import s from "./about.module.scss";

import type { GetStaticProps } from "next";
gsap.registerPlugin(ScrollTrigger);

const calculateDuration = function (dateStr) {
  const currentDate = DateTime.local().startOf("day");
  const date = DateTime.fromISO(dateStr).startOf("day");
  const duration = currentDate.diff(date, ["years", "months", "days"]);
  return duration.toObject();
};

type Props = {
  technologiesData: any;
};

export default function About({ technologiesData }: Props) {
  const darkMode = useRecoilValue(darkModeState);
  const rellaxRef = useRef(null);
  const ageObj = calculateDuration("19950119");
  const ref = useRef(null);
  const rectRef = useRef(null);
  const q = gsap.utils.selector(ref);

  useEffect(() => {
    new Rellax(rellaxRef.current, { center: true, speed: 3 });

    const ctx = gsap.context(() => {
      const rect = rectRef.current.getBoundingClientRect();
      const pinSection = q(`.${s.historySection} .${s.inner}`);
      gsap.to(pinSection, {
        scrollTrigger: {
          end: () => `+=${rect.width - window.innerWidth}`,
          markers: true,
          pin: true,
          scrub: true,
          start: "top top",
          trigger: pinSection,
        },
        x: -(rect.width - window.innerWidth + 20),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Aboutページです。"
        title="About"
      />
      <div className="pageWrap" ref={ref}>
        <main
          className={classNames(s.main, {
            [s["is-darkMode"]]: darkMode,
          })}
        >
          <CommonFvSection desc="こんな人です" title="About" />
          <div className={s.section}>
            <div className={s.inner}>
              <SimpleTitle desc="自己紹介" title="Self Introduction" />
              <div className={s.gridContainer}>
                <div className={s.imgWrap}>
                  <div className={s.imgBox}>
                    <img alt="" ref={rellaxRef} src="/img/personal.webp" />
                  </div>
                </div>
                <div className={s.contentWrap}>
                  <div className={s.textBox}>
                    東京でフロントエンドエンジニアとして働いています。
                    <br />
                    一児の父です。 Next.jsが好き。
                  </div>
                  <div className={s.infoBox}>
                    <div className={s.row}>
                      <div className={s.th}>名前</div>
                      <div className={s.td}>
                        <h2>清水 僚太</h2>
                      </div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>職種</div>
                      <div className={s.td}>
                        <h2>フロントエンドエンジニア</h2>
                      </div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>年齢</div>
                      <div className={s.td}>{ageObj.years}</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>所在地</div>
                      <div className={s.td}>東京都足立区</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>出身</div>
                      <div className={s.td}>愛知県豊川市</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>趣味</div>
                      <div className={s.td}>フットサル</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>メールアドレス</div>
                      <div className={s.td}>
                        otsukaresamannsatabasa@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(s.historySection)}>
            <div className={s.inner}>
              <div className={s.xScrollRect} ref={rectRef}>
                <div className={s.historyBox}>
                  <SimpleTitle desc="経歴" title="History" />
                </div>
                <div className={s.historyBox}>
                  <SimpleTitle desc="経歴" title="History" />
                </div>
                <div className={s.historyBox}>
                  <SimpleTitle desc="経歴" title="History" />
                </div>
              </div>
            </div>
          </div>

          <div className={s.section}>
            <div className={s.inner}>
              <SimpleTitle
                desc="僕の好きな技術です"
                title="Favorite Technologies"
              />
              <TechnologiesList items={technologiesData.items} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getEntries({
    content_type: "technologies",
  });

  return {
    props: {
      technologiesData: res,
    },
  };
};
