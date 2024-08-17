import { socialMediaLinks } from "../../data/data";
import { WhatsappIcon } from "../../helpers/useIcons";

import style from "./style.module.scss";

const WhatsappSticky = () => {
  return (
    <div className={style.stickyButton}>
      <a href={socialMediaLinks.whatsapp} target="_blank">
        <label htmlFor={style.offchatMenu}>
          <WhatsappIcon />
        </label>
      </a>
    </div>
  );
};

export default WhatsappSticky;
