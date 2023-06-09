import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Contactページです。"
        title="Contact"
      />
      <div>
        <main>
          <CommonFvSection desc="お問い合わせはこちら" title="Contact" />
        </main>
        <Footer />
      </div>
    </>
  );
}
