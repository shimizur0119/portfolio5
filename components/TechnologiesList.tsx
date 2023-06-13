import { useEffect } from "react";

import s from "./technologiesList.module.scss";

type Props = {
  items: any;
};

export default function TechnologiesList({ items }: Props) {
  useEffect(() => {
    console.log("items", items);
  }, []);

  return (
    <ul className={s.technologiesList}>
      {items &&
        items.map((item, i) => {
          return (
            <li className={s.item} key={`technologiesList_${i}`}>
              <div className={s.inner}>
                <div className={s.logo}>
                  <img alt="" src={item.fields.logo.fields.file.url} />
                </div>
                <div className={s.content}>
                  <div className={s.row}>
                    <div className={s.th}>名称</div>
                    <div className={s.td}>{item.fields.name}</div>
                  </div>
                  <div className={s.row}>
                    <div className={s.th}>習熟度</div>
                    <div className={s.td}>{item.fields.star}</div>
                  </div>
                  <div className={s.row}>
                    <div className={s.th}>経験年数</div>
                    <div className={s.td}>{item.fields.yearsOfExperience}</div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
