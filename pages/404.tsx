import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <>
      <CommonHead
        description="お探しのページが見つかりません。"
        title="404 Page Not Found"
      />
      <div className="pageWrap">
        <main>
          <CommonFvSection
            desc="お探しのページが見つかりません"
            title="😭 404 Page Not Found 😭"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
