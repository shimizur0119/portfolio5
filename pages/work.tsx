import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

export default function Work() {
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Workページです。"
        title="Work"
      />
      <div>
        <main>
          <CommonFvSection desc="こんな仕事してます" title="Work" />
        </main>
        <Footer />
      </div>
    </>
  );
}
