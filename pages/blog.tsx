import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Blogページです。"
        title="Blog"
      />
      <div>
        <main>
          <CommonFvSection desc="Blog書いてます" title="Blog" />
        </main>
        <Footer />
      </div>
    </>
  );
}
