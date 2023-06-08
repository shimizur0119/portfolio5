import Head from "next/head";

import Header from "../components/Header";

import s from "./CommonLayout.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: Props) {
  return (
    <div className={s.commonLayout}>
      <Head>
        <meta content="noindex, nofollow" name="robots" />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}
