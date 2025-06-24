import React, { useEffect, useState } from "react";
import "../Css/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  const [showPopover, setShowPopover] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  const closePopover = () => {
    setDontShowAgain(true);
    setShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById("itemToTrack");

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (itemRect.top < windowHeight && itemRect.bottom > 70) {
        setShowPopover(true);
      } else {
        setShowPopover(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      {/* Brand Name */}
      <Link to="/" className="header__textLogo">
        <span style={{ color: "#2e7d32", fontWeight: "bold", fontSize: "28px" }}>
          Greenify
        </span>
      </Link>

     {/* Search Input with Icon */}
<div className="header__search">
  <input
    className="header__searchInput"
    type="text"
    placeholder="Search eco-products..."
  />
  <span className="header__searchIcon">🔍</span>
</div>


      {/* Nav Links */}
      <div className="header__nav">
        <Link to="/login" className="header__optionLink">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Green Soul</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/orders" className="header__optionLink">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/dashboard" className="header__optionLink">
          <div className="header__option">
            <span className="header__optionLineOne">Eco</span>
            <span className="header__optionLineTwo">Dashboard</span>
          </div>
        </Link>

        {/* Cart (text-only, modern style) */}
        <Link to="/checkout" onClick={handleLinkClick} className="header__optionLink">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo">Cart ({basket?.length || 0})</span>
          </div>
        </Link>

        {/* Greenovation Zone Button */}
        <div className="greenify-navbar__button-wrapper">
          <Link to="/green">
            <button id="itemToTrack" className="greenify-navbar__button">
              Greenovation Zone
            </button>
          </Link>

          {showPopover && !dontShowAgain && (
            <div className="greenify-navbar__popover">
              <div className="greenify-navbar__popover-arrow" />
              <p>
                Introducing our brand new section<br />
                <strong>Greenovation Zone</strong>
              </p>
              <button
                className="greenify-navbar__gotit"
                onClick={closePopover}
              >
                Got It
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
