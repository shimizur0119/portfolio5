import "destyle.css/destyle.css";
import "../styles/globals.scss";
import CommonLayout from "../layouts/CommonLayout";
import oswald from "../styles/fonts/oswald";

function MyApp({ Component, pageProps }) {
  return (
    <div className={oswald.className}>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </div>
  );
}

export default MyApp;
