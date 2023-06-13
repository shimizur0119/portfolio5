import s from "./simpleTitle.module.scss";

type Props = {
  desc: string;
  title: string;
};

export default function SimpleTitle({ title, desc }: Props) {
  return (
    <div className={s.simpleTitle}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.desc}>{desc}</div>
    </div>
  );
}
