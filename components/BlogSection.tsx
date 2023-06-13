import { useEffect } from "react";

import { DateTime } from "luxon";
import Link from "next/link";

import s from "./blogSection.module.scss";

type Props = {
  blogData: any;
  tagData: any;
};

const dateFormat = (date: string) => {
  return DateTime.fromISO(date).toFormat("yyyy.MM.dd");
};

const getTagName = (tagId, tagItems) => {
  const tagName = tagItems.find((tag) => tag.sys.id === tagId).name;
  return tagName;
};

export default function BlogSection({ blogData, tagData }: Props) {
  useEffect(() => {
    console.log(tagData);
  }, []);

  return (
    <div className={s.blogSection}>
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
