import s from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.copyright}>made by Ryota Shimizu 🤪</div>
      </div>
    </footer>
  );
}
