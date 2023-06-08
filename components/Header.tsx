import classNames from "classnames";
import Link from "next/link";
import { useRecoilState } from "recoil";

import SvgLogo from "../components/svg/SvgLogo";
import { sideMenuState } from "../states/atoms";

import SideMenu from "./SideMenu";
import s from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useRecoilState(sideMenuState);
  const clickMenuBtn = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Link className={s.logoInner} href="/">
            <SvgLogo />
          </Link>
        </div>
        <button
          className={classNames(s.menuBtn, {
            [s["is-open"]]: menuOpen,
          })}
          onClick={clickMenuBtn}
        >
          <div className={s.bar}></div>
          <div className={s.bar}></div>
        </button>
      </header>
      <SideMenu />
    </>
  );
}
