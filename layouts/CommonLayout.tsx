import { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import Header from "../components/Header";
import { initialState } from "../states/atoms";

import s from "./commonLayout.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: Props) {
  const router = useRouter();
  const [, setInitialState] = useRecoilState(initialState);

  useEffect(() => {
    if (router.asPath !== "/") {
      setInitialState(false);
    }
  }, []);

  return (
    <div className={s.commonLayout}>
      <Head>
        <meta content="noindex, nofollow" name="robots" />
      </Head>
      <Header />
      {children}
    </div>
  );
}
