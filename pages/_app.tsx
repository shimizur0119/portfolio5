import "destyle.css/destyle.css";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";

import CommonLayout from "../layouts/CommonLayout";
import PageTransition from "../layouts/PageTransition";
import oswald from "../styles/fonts/oswald";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className={oswald.className}>
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
