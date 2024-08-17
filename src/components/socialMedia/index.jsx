import { socialMediaLinks } from "../../data/data";
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../helpers/useIcons";

import style from "./style.module.scss";

const SocialMedia = () => {
  const socialMedias = [
    {
      link: socialMediaLinks.instagram,
      icon: <InstagramIcon />,
    },
    {
      link: socialMediaLinks.linkedin,
      icon: <LinkedinIcon />,
    },
    {
      link: socialMediaLinks.youtube,
      icon: <YoutubeIcon />,
    },
  ];

  return (
    <div className={style.container}>
      {socialMedias.map((socialMedia, index) => (
        <a href={socialMedia.link} target="_blank" key={index}>
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
