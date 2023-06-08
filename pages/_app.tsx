import "destyle.css/destyle.css";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";

import CommonLayout from "../layouts/CommonLayout";
import oswald from "../styles/fonts/oswald";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className={oswald.className}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
