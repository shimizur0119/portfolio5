import "destyle.css/destyle.css";
import "../styles/globals.scss";
import CommonLayout from "../layouts/CommonLayout";

function MyApp({ Component, pageProps }) {
  return (
    <CommonLayout>
      <Component {...pageProps} />;
    </CommonLayout>
  );
}

export default MyApp;
