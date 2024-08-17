import { Link } from "react-router-dom";

import { menuLinks } from "../../data/data";

const MenuLinks = ({ setIsBurgerActive }) => {
  return menuLinks.map((menuLink, index) => (
    <Link
      key={index}
      to={menuLink.slug}
      onClick={() => setIsBurgerActive && setIsBurgerActive}
    >
      {menuLink.link}
    </Link>
  ));
};

export default MenuLinks;
