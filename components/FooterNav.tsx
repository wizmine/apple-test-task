import React from "react";

import "../styles/FooterNav.scss";

const FooterNav = () => {
  const categories = [
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investor",
    "Ethic & Compliance",
    "Events",
    "Contact Apple",
  ];

  return (
    <nav className="footer-nav">
      <div className="footer-nav__tags">
        {categories.map((name, id) => (
          <button className="footer-nav__tags-btn" key={id}>
            <h3 className="footer-nav__tags-btn-text">{name}</h3>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FooterNav;
