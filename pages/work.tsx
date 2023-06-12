import { useEffect } from "react";

import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import { client } from "../utils/contentful";

import type { GetStaticProps } from "next";

type Props = {
  posts: any;
};

export default function Work({ posts }: Props) {
  useEffect(() => {
    console.log(posts);
  }, []);
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Workページです。"
        title="Work"
      />
      <div className="pageWrap">
        <main>
          <CommonFvSection desc="こんな仕事してます" title="Work" />
          <ul>
            {posts.map((post, i) => {
              return (
                <WorkCard
                  date={post.fields.date}
                  description={post.fields.description}
                  href={post.fields.url}
                  img={post.fields.img.fields.file.url}
                  key={`workCard_${i}`}
                  title={post.fields.title}
                />
              );
            })}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getEntries({
    content_type: "works",
  });

  return {
    props: {
      posts: res.items,
    },
  };
};
