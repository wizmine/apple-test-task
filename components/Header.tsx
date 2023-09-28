import React from "react";
import Link from "next/link";
import Image from "next/image";

import chevronDown from "../assets/chevron.down.svg";
import appleLogo from "../assets/ic_outline-apple.svg";
import magnifyingGlass from "../assets/magnifyingglass.svg";
import bag from "../assets/bag.svg";
import person from "../assets/person.svg";

import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-con">
        <Link className="header__left-con-home" href="/">
          Home
        </Link>
        <button className="header__left-con-products">
          Products <Image src={chevronDown} alt="chevron_down" />
        </button>
        <button>Entertainment</button>
        <button>Support</button>
      </div>
      <Image className="header__logo" src={appleLogo} alt="apple_logo" />
      <div className="header__right-con">
        <div className="header__right-con-search">
          <Image className="header__right-con-search-image" src={magnifyingGlass} alt="search" />
          <input className="header__right-con-search-input" type="text" placeholder="Search" />
        </div>
        <div className="header__right-con-cart">
          <Image className="header__right-con-cart-image" src={bag} alt="cart" />
        </div>
        <div className="header__right-con-profile">
          <Image className="header__right-con-profile-image" src={person} alt="person" />
        </div>
      </div>
    </header>
  );
};

export default Header;
