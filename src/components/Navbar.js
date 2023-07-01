import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="heading">
        <h1>eCommerce</h1>
      </div>

      <div className="navbar-links">
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/add-product" className="nav-link">
          Add a Product
        </Link>

        <Link to="/cart" className="cart-icon">
          <img
            src="https://img.icons8.com/?size=1x&id=59997&format=png"
            alt="cart_icon"
          />
          <span className="cart-count">0</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
