import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../actions/cartActions";
import "../styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    alert("Product removed from cart!");
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const productsInCart = cartItems.map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return {
        ...product,
        quantity: cartItem.quantity,
      };
    });
    setCartProducts(productsInCart);
  }, [cartItems, products]);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2 className="cartTitle">Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cartTitle">Cart</h2>
      <div className="cartItemsContainer">
        {cartProducts.map((cartProduct) => (
          <div className="cartItem" key={cartProduct.id}>
            <div className="cartItemImageContainer">
              <img
                className="cartItemImage"
                src={cartProduct.image}
                alt={cartProduct.name}
              />
            </div>
            <div className="cartItemInfo">
              <h3 className="cartItemName">{cartProduct.name}</h3>
              <p className="cartItemPrice">Price: ${cartProduct.price}</p>
              <div className="cartItemQuantity">
                <button
                  className="quantityButton"
                  onClick={() => handleDecreaseQuantity(cartProduct.id)}
                >
                  -
                </button>
                <p className="quantityValue">{cartProduct.quantity}</p>
                <button
                  className="quantityButton"
                  onClick={() => handleIncreaseQuantity(cartProduct.id)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="removeButton"
              onClick={() => handleRemoveFromCart(cartProduct.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
