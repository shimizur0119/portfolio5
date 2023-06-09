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
          <div>
            <h1>My Works</h1>
            <div>制作物の一覧です</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
