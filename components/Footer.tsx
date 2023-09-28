import React from "react";
import Image from "next/image";

import globe from "@/assets/globe.asia.australia.svg";
import chevronDown from "../assets/chevron.down.svg";

import "../styles/Footer.scss";

const Footer = () => {
  const shopAndLearn = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ];
  const appleStore = [
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Apple Camp",
    "Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    "Financing",
    "Carrier Deals at Apple",
    "Order Status",
    "Shopping Help",
  ];
  const forBusiness = ["Apple and Business", "Shop for Business"];
  const forEducation = ["Apple and Education", "Shop for K-12", "Shop for College"];
  const forHealthcare = [
    "Apple in Healthcare",
    "Health on Apple Watch",
    "Health Records on iPhone",
  ];
  const entertainment = [
    "Apple One",
    "Apple TV+",
    "Apple Music",
    "Apple Arcade",
    "Apple Fitness+",
    "Apple News+",
    "Apple Podcasts",
    "Apple Books",
    "App Store",
  ];
  const appleWallet = ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"];
  const account = ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"];
  const infoFaq = ["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"];

  const lastIndexFaq = infoFaq.length - 1;
  const lastElementFaq = infoFaq[lastIndexFaq];

  return (
    <footer className="footer">
      <div className="footer__references">
        <div className="footer__references-block-first">
          <p className="footer__references-block-title">Shop & Learn</p>
          {shopAndLearn.map((name, id) => (
            <button className="footer__references-block-btn" key={id}>
              <p className="footer__references-block-btn-text">{name}</p>
            </button>
          ))}
        </div>
        <div className="footer__references-block-second">
          <p className="footer__references-block-title">Apple Store</p>
          {appleStore.map((name, id) => (
            <button className="footer__references-block-btn" key={id}>
              <p className="footer__references-block-btn-text">{name}</p>
            </button>
          ))}
        </div>
        <div className="footer__references-block-third">
          <div className="footer__references-block-inside">
            <p className="footer__references-block-title">For Business</p>
            {forBusiness.map((name, id) => (
              <button className="footer__references-block-btn" key={id}>
                <p className="footer__references-block-btn-text">{name}</p>
              </button>
            ))}
          </div>
          <div className="footer__references-block-inside">
            <p className="footer__references-block-title">For Education</p>
            {forEducation.map((name, id) => (
              <button className="footer__references-block-btn" key={id}>
                <p className="footer__references-block-btn-text">{name}</p>
              </button>
            ))}
          </div>
          <div className="footer__references-block-inside">
            <p className="footer__references-block-title">For Healthcare</p>
            {forHealthcare.map((name, id) => (
              <button className="footer__references-block-btn" key={id}>
                <p className="footer__references-block-btn-text">{name}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="footer__references-block-fourth">
          <p className="footer__references-block-title">Entertainment</p>
          {entertainment.map((name, id) => (
            <button className="footer__references-block-btn" key={id}>
              <p className="footer__references-block-btn-text">{name}</p>
            </button>
          ))}
        </div>
        <div className="footer__references-block-fifth">
          <div className="footer__references-block-inside">
            <p className="footer__references-block-title">Apple Wallet</p>
            {appleWallet.map((name, id) => (
              <button className="footer__references-block-btn" key={id}>
                <p className="footer__references-block-btn-text">{name}</p>
              </button>
            ))}
          </div>
          <div className="footer__references-block-inside">
            <p className="footer__references-block-title">Account</p>
            {account.map((name, id) => (
              <button className="footer__references-block-btn" key={id}>
                <p className="footer__references-block-btn-text">{name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <span className="footer__line"></span>
      <div className="footer__info">
        <p className="footer__info-copyright">Copyright © 2023 Apple Inc. All rights reserved.</p>
        <div className="footer__info-faq">
          {infoFaq.map((name, id) =>
            lastElementFaq !== name ? (
              <>
                <button className="footer__info-faq-btn">
                  <p className="footer__info-faq-btn-text">{name}</p>
                </button>
                <span className="footer__info-faq-line"></span>
              </>
            ) : (
              <button className="footer__info-faq-btn" key={id}>
                <p className="footer__info-faq-btn-text">{name}</p>
              </button>
            )
          )}
        </div>
        <button className="footer__info-locate">
          <Image className="footer__info-locate-image" src={globe} alt="globe" />
          <p className="footer__info-locate-text">USA, English</p>
          <Image src={chevronDown} alt="chevron_down" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
