import { DateTime } from "luxon";

import s from "./workCard.module.scss";

type Props = {
  date: string;
  description: string;
  href: string;
  img: string;
  title: string;
};

const dateFormat = (date: string) => {
  const dt = DateTime.fromISO(date);
  return dt.toFormat("yyyy.MM.dd");
};

export default function WorkCard({
  title,
  description,
  img,
  href,
  date,
}: Props) {
  return (
    <li className={s.workCard}>
      <div className={s.inner}>
        <div className={s.imgWrap}>
          <div className={s.date}>{dateFormat(date)}</div>
          <img alt={title} className={s.img} src={img} />
        </div>
        <div className={s.contentWrap}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.desc}>{description}</p>
          <a
            className={s.link}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            visit web site
          </a>
        </div>
      </div>
    </li>
  );
}
