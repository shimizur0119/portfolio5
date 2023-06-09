import s from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.copyright}>
          Design & Development by Ryota Shimizu 🤪
        </div>
      </div>
    </footer>
  );
}
