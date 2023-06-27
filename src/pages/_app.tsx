import "destyle.css/destyle.css";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";

import CommonLayout from "@/layouts/CommonLayout";
import PageTransition from "@/layouts/PageTransition";
import zenKakuGothicNew from "@/styles/fonts/zenKakuGothicNew";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
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
