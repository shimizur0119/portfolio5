import s from "./commonFvSection.module.scss";

type Props = {
  desc?: string;
  title?: string;
};

export default function CommonFvSection({ title, desc }: Props) {
  return (
    <div className={s.commonFvSection}>
      <div className={s.inner}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.desc}>{desc}</div>
      </div>
    </div>
  );
}
