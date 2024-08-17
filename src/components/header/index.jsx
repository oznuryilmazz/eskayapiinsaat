import { useState, useEffect } from "react";

import { CloseIcon, MenuIcon } from "../../helpers/useIcons";

import Logo from "../logo";
import SocialMedia from "../socialMedia";
import MenuLinks from "../menuLinks";

import "./style.css";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  useEffect(() => {
    const headerNav = document.querySelector(".header__nav");
    const header = document.querySelector(".header");

    const handleBurgerClick = () => {
      setIsBurgerActive(!isBurgerActive);
      headerNav.classList.toggle("open");
    };

    const closeMenu = () => {
      setIsBurgerActive(false);
      headerNav.classList.remove("open");
    };

    const burger = document.querySelector(".burger");
    burger.addEventListener("click", handleBurgerClick);

    // Close menu on link click
    const navLinks = document.querySelectorAll(".header__nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const handleScroll = () => {
      if (
        document.body.scrollTop >= 120 ||
        document.documentElement.scrollTop >= 120
      ) {
        header.classList.add("header--scroll");
      } else {
        header.classList.remove("header--scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      burger.removeEventListener("click", handleBurgerClick);
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBurgerActive]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Logo />
          <div className="burger">
            {isBurgerActive ? <CloseIcon /> : <MenuIcon />}
          </div>
          <SocialMedia />
        </div>
        <nav
          className="header__nav"
          style={{ display: isBurgerActive ? "flex" : "none" }}
        >
          <MenuLinks setIsBurgerActive={() => setIsBurgerActive(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
