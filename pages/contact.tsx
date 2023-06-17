import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

import s from "./contact.module.scss";

export default function Contact() {
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Contactページです。"
        title="Contact"
      />
      <div className="pageWrap">
        <main>
          <CommonFvSection desc="お問い合わせはこちら" title="Contact" />
          <div className={s.contentSection}>
            <div className={s.inner}>
              <div className={s.content}>
                こちらのGoogle Formからお問い合わせください。
                <br />
                <a
                  href="https://forms.gle/Qsnceu3k9EC8q4NN6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://forms.gle/Qsnceu3k9EC8q4NN6
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
