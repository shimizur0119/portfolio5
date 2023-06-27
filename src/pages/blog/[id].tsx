import { useEffect } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classNames from "classnames";
import { useRecoilValue } from "recoil";

import Footer from "@/components/Footer";
import { darkModeState } from "@/states/atoms";
import { client } from "@/utils/contentful";
import { dateFormat } from "@/utils/dateFormat";
import { getTagName } from "@/utils/getTagName";
import { renderOptions } from "@/utils/renderOptions";

import s from "./blogDetail.module.scss";

import type { GetStaticProps, GetStaticPaths } from "next";
import type { ParsedUrlQuery } from "node:querystring";

type Props = {
  postData: any;
  tagData: any;
};

export default function BlogDetail({ postData, tagData }: Props) {
  const darkMode = useRecoilValue(darkModeState);
  useEffect(() => {
    console.log(tagData);
  }, []);
  return (
    <>
      <div className="pageWrap">
        <main
          className={classNames(s.main, {
            [s["is-darkMode"]]: darkMode,
          })}
        >
          <div className={s.blogDetail}>
            <div className={s.blogDetailFv}>
              <h1 className={s.title}>{postData.fields.title}</h1>
              <div className={s.info}>
                <div className={s.tagList}>
                  {postData.metadata.tags.map((tag, i) => {
                    return (
                      <div className={s.tag} key={`tagItem_${i}`}>
                        # {getTagName(tag.sys.id, tagData.items)}
                      </div>
                    );
                  })}
                </div>
                <div className={s.date}>
                  {dateFormat(postData.sys.createdAt)}
                </div>
              </div>
            </div>
            <div className={s.content}>
              {documentToReactComponents(
                postData.fields.content,
                renderOptions
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const tagsRes = await client.getTags();

  const res = await client.getEntry(params?.id).catch(() => null);

  if (!res) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      postData: res,
      tagData: tagsRes,
    },
    revalidate: 100,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};
