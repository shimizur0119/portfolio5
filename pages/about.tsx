import CommonFvSection from "../components/CommonFvSection";
import CommonHead from "../components/CommonHead";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Aboutページです。"
        title="About"
      />
      <main>
        <CommonFvSection desc="こんな人です" title="About" />
      </main>
      <Footer />
    </div>
  );
}
