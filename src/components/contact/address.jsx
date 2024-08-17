import { addressData } from "../../data/data";

import { AddressIcon, PhoneIcon, MailIcon } from "../../helpers/useIcons";

import style from "./styles.module.scss";

const Address = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.contact}>
        <AddressIcon />
        <p>{addressData.address}</p>
      </div>
      <div className={style.contact}>
        <PhoneIcon />
        <a href={`tel:${addressData.phone}`}>{addressData.phone}</a>
      </div>
      <div className={style.contact}>
        <MailIcon />
        <a href={`mailto:${addressData.mail}`}>{addressData.mail}</a>
      </div>
    </div>
  );
};

export default Address;
