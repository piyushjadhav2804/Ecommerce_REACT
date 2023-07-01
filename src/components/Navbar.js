import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
