import "destyle.css/destyle.css";
import "@/styles/globals.scss";
import { RecoilRoot } from "recoil";

import GtmScript from "@/components/GtmScript";
import CommonLayout from "@/layouts/CommonLayout";
import PageTransition from "@/layouts/PageTransition";
import zenKakuGothicNew from "@/styles/fonts/zenKakuGothicNew";

import type { GtmId } from "@/components/GtmScript";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GtmScript gtmId={process.env.NEXT_PUBLIC_GTM_ID as GtmId} />
      <style global jsx>
        {`
          html {
            font-family: ${zenKakuGothicNew.style.fontFamily};
          }
        `}
      </style>
      <CommonLayout>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </CommonLayout>
    </RecoilRoot>
  );
}

export default MyApp;
