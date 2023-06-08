import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";
import StrEachSpanWrap from "../components/strEachSpanWrap";

import s from "./index.module.scss";

import type { NextComponentType } from "next";

type SectionItemProps = {
  desc: string;
  title: string;
};

const SectionItem: NextComponentType<SectionItemProps> = ({ title, desc }) => {
  return (
    <div className={s.sectionItem}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.desc}>{desc}</div>
    </div>
  );
};

export default function Top() {
  return (
    <div>
      <CommonHead
        description="Shimizu Ryota のポートフォリオサイトです。"
        title="Top page"
      />
      <main>
        <div className={s.pageWrap}>
          <div className={s.pageInner}>
            <div className={s.fvSection}>
              <div className={s.inner}>
                <h1 className={s.mainText}>
                  <StrEachSpanWrap str="Ryota" />
                  <br />
                  <StrEachSpanWrap str="Shimizu" />
                </h1>
              </div>
            </div>
            <div className={s.sections}>
              <div className={s.sectionsRow}>
                <SectionItem desc="こんな仕事してます" title="Work" />
                <SectionItem desc="こんな人です" title="About" />
              </div>
              <div className={s.sectionsRow}>
                <SectionItem desc="ブログ書いてます" title="Blog" />
                <SectionItem desc="お問い合わせはこちら" title="Contact" />
                <SectionItem desc="その他" title="Other" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
