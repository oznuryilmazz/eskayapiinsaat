import SocialMedia from "../socialMedia";
import MenuLinks from "../menuLinks";

import style from "./style.module.scss";

const Footer = () => {
  return (
    <>
      <div className={style.footerLine}>
        <div className={style.line1}></div>
      </div>
      <div className={style.footer}>
        <SocialMedia />
        <div className={style.footerBox}>
          <MenuLinks />
        </div>
        <div className={style.footerCopy}>
          <p>
            ©{" "}
            <a href="https://beratdimen.github.io/" target="_blank">
              Berat Dimen 2024.
            </a>{" "}
            Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
