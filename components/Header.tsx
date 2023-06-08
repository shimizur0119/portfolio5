import { useState } from "react";

import classNames from "classnames";
import Link from "next/link";

import SvgLogo from "../components/svg/SvgLogo";

import s from "./header.module.scss";

export default function Header() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const clickMenuBtn = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link className={s.logoInner} href="/">
          <SvgLogo />
        </Link>
      </div>
      <button
        className={classNames(s.menuBtn, { [s["is-open"]]: hamburgerMenuOpen })}
        onClick={clickMenuBtn}
      >
        <div className={s.bar}></div>
        <div className={s.bar}></div>
      </button>
    </header>
  );
}
