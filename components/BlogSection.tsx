import { useEffect } from "react";

import classNames from "classnames";
import Link from "next/link";
import { useRecoilValue } from "recoil";

import { darkModeState } from "../states/atoms";
import { dateFormat } from "../utils/dateFormat";
import { getTagName } from "../utils/getTagName";

import s from "./blogSection.module.scss";

type Props = {
  blogData: any;
  tagData: any;
};

export default function BlogSection({ blogData, tagData }: Props) {
  const darkMode = useRecoilValue(darkModeState);
  useEffect(() => {
    console.log(tagData);
  }, []);

  return (
    <div
      className={classNames(s.blogSection, {
        [s["is-darkMode"]]: darkMode,
      })}
    >
      <div className={s.side}>
        <div className={s.sideBox}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.inner} href="/blog">
                <div className={s.text}>ALL</div>
              </Link>
            </li>
            {tagData.items.map((item, i) => {
              return (
                <li className={s.item} key={`tagItem_${i}`}>
                  <Link className={s.inner} href={`/blog/tags/${item.sys.id}`}>
                    <div className={s.text}># {item.name}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={s.content}>
        <ul className={s.list}>
          {blogData.items.map((item, i) => {
            return (
              <li className={s.item} key={i}>
                <Link className={s.inner} href={`/blog/${item.sys.id}`}>
                  <div className={s.top}>
                    <div className={s.date}>
                      {dateFormat(item.sys.createdAt)}
                    </div>
                    <div className={s.tagList}>
                      {item.metadata.tags.map((tag, ii) => {
                        return (
                          <div className={s.tag} key={`tagItem_${i}_${ii}`}>
                            # {getTagName(tag.sys.id, tagData.items)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={s.title}>{item.fields.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
