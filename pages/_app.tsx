import "destyle.css/destyle.css";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";

import CommonLayout from "../layouts/CommonLayout";
import PageTransition from "../layouts/PageTransition";
import kleeOne from "../styles/fonts/kleeOne";
import oswald from "../styles/fonts/oswald";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <style global jsx>
        {`
          html {
            font-family: ${oswald.style.fontFamily}, ${kleeOne.style.fontFamily};
          }
        `}
      </style>
      <div>
        <CommonLayout>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </CommonLayout>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
