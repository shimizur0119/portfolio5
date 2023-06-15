import classNames from "classnames";
import { useRecoilValue } from "recoil";

import { darkModeState } from "../states/atoms";
import oswald from "../styles/fonts/oswald";

import s from "./commonFvSection.module.scss";

type Props = {
  desc?: string;
  title?: string;
};

export default function CommonFvSection({ title, desc }: Props) {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div
      className={classNames(s.commonFvSection, {
        [s["is-darkMode"]]: darkMode,
      })}
    >
      <div className={s.inner}>
        <h1 className={classNames(s.title, oswald.className)}>{title}</h1>
        <div className={s.desc}>{desc}</div>
      </div>
    </div>
  );
}
