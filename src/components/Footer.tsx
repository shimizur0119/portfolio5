import classNames from "classnames";
import { useRecoilValue } from "recoil";

import { darkModeState } from "@/states/atoms";

import s from "./footer.module.scss";
export default function Footer() {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <footer className={classNames(s.footer, { [s["is-darkMode"]]: darkMode })}>
      <div className={s.inner}>
        <div className={s.copyright}>
          Design & Development by Ryota Shimizu 🤪
        </div>
      </div>
    </footer>
  );
}
