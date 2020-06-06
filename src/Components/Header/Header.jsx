import React from "react";
import "./Header.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BrandingLogo from "../../Assets/branding-logo.png";

import CONSTANT from "../../Constants/constants";

const Header = () => {
  return (
    <div className="ecom-header">
      <div className="ecom-header-wrapper">
        <div className="ecom-header-branding-image col-md-2">
          <img src={BrandingLogo} alt="Branding Logo" />
        </div>
        <div className="ecom-header-content col-md-9">
          <div className="ecom-header-content-upper">
            <div className="ecom-header-content-upper-location btn-group">
              <button
                type="button"
                className="btn btn-light dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <LocationOnIcon />
                {CONSTANT.CURRENT_COUNTRY}
              </button>
              <div className="dropdown-menu available-countries">
                {CONSTANT.AVAIALBLE_COUNTRIES.map((items) => {
                  return (
                    <span className="dropdown-item country-items" key={items}>
                      {items}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="ecom-header-content-upper-search-cart btn-group">
              <button
                type="button"
                className="btn btn-light ecom-header-content-upper-search"
              >
                <SearchIcon />
                {CONSTANT.SEARCH_BTN}
              </button>
              <button
                type="button"
                className="btn btn-light ecom-header-content-upper-cart"
              >
                <ShoppingCartIcon />
                {CONSTANT.CART_BTN}
              </button>
            </div>
          </div>
          <hr />
          <div className="ecom-header-content-lower">
            <div className="ecom-header-content-lower-categories">
              {CONSTANT.TYPES.map((category) => {
                return (
                  <span className="ecom-header-category" key={category}>
                    {category}
                    <span className="ecom-header-seperator"> | </span>
                  </span>
                );
              })}
            </div>
          <div>{CONSTANT.REFER_A_FRIEND}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
