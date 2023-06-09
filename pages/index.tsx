import { useEffect, useRef } from "react";

import Link from "next/link";
import { useRecoilState } from "recoil";

import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";
import StrEachSpanWrap from "../components/StrEachSpanWrap";
import { initialState } from "../states/atoms";
import topPageInitialAnim from "../utils/topPageInitialAnim";

import s from "./index.module.scss";

type SectionItemProps = {
  desc: string;
  href?: string;
  title: string;
};

const SectionItem = ({ title, desc, href }: SectionItemProps) => {
  return (
    <div className={s.sectionItem}>
      <Link href={href}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.desc}>{desc}</div>
      </Link>
    </div>
  );
};

export default function Top() {
  const [initial, setInitial] = useRecoilState(initialState);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!initial) return;
    topPageInitialAnim(ref);
    setInitial(false);
  }, []);

  return (
    <>
      <CommonHead description="Ryota Shimizu のポートフォリオサイトです。" />
      <div>
        <main ref={ref}>
          <div className={s.pageWrap}>
            <div className={s.pageInner}>
              <div className={s.fvSection}>
                <div className={s.inner}>
                  <h1 className={s.mainText}>
                    <div className={s.row}>
                      <StrEachSpanWrap str="Ryota" />
                    </div>
                    <div className={s.row}>
                      <StrEachSpanWrap str="Shimizu" />
                    </div>
                  </h1>
                </div>
              </div>
              <div className={s.sections}>
                <div className={s.sectionsRow}>
                  <SectionItem
                    desc="こんな仕事してます"
                    href="/work"
                    title="Work"
                  />
                  <SectionItem
                    desc="こんな人です"
                    href="/about"
                    title="About"
                  />
                </div>
                <div className={s.sectionsRow}>
                  <SectionItem
                    desc="ブログ書いてます"
                    href="/blog"
                    title="Blog"
                  />
                  <SectionItem
                    desc="お問い合わせはこちら"
                    href="/contact"
                    title="Contact"
                  />
                  <SectionItem desc="その他" href="/other" title="Other" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
