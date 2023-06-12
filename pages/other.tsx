import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

export default function Other() {
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Otherページです。"
        title="Other"
      />
      <div className="pageWrap">
        <main>
          <CommonFvSection desc="その他" title="Other" />
        </main>
        <Footer />
      </div>
    </>
  );
}
