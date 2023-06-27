import Head from "next/head";

type Props = {
  description?: string;
  title?: string;
};

export default function CommonHead({ title, description }: Props) {
  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title} | Ryota Shimizu ポートフォリオサイト`
            : "Ryota Shimizu ポートフォリオサイト"}
        </title>
        <meta content={description} name="description" />
      </Head>
    </div>
  );
}
