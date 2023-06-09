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
          <div>
            <h1>Blog</h1>
            <div>Blog書いてます</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
