import { client } from "../../utils/contentful";

import type { GetStaticProps, GetStaticPaths } from "next";
import type { ParsedUrlQuery } from "node:querystring";

type Props = {
  postData: any;
};

export default function BlogDetail({ postData }: Props) {
  return (
    <div>
      <div>blog detail</div>
      <h1>{postData.fields.title}</h1>
    </div>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
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
