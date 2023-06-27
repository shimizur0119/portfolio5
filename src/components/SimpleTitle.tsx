import classNames from "classnames";

import oswald from "@/styles/fonts/oswald";

import s from "./simpleTitle.module.scss";

type Props = {
  desc: string;
  title: string;
};

export default function SimpleTitle({ title, desc }: Props) {
  return (
    <div className={s.simpleTitle}>
      <h2 className={classNames(s.title, oswald.className)}>{title}</h2>
      <div className={s.desc}>{desc}</div>
    </div>
  );
}
