import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

export const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
      alert("user has signed out");
    }
  };

  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.freebiesupply.com/logos/large/2x/amazon-com-light-logo-svg-vector.svg"
          alt="amz-logo"
        />
      </Link>

      {/* seacrh box */}
      <div className="header__search">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option1">Hello {user?.email}</span>
            <span className="header__option2">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Return</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
      </div>

      {/* basket */}
      <Link className="header__link" to="/checkout">
        <div className="header__optionBasket">
          {/* Icon */}
          <ShoppingBasketIcon />
          {/* number */}
          <span className="header__option2 header__BasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};
