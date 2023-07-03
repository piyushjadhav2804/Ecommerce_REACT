// import necessary dependencies
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../actions/cartActions";
import "../styles/cart.css";

// Cart component that renders the Cart details
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);

  // state variables
  const [cartProducts, setCartProducts] = useState([]);

  // responsible for dispatching the removeFromCart action with the productId as a parameter to remove the product from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    alert("Product removed from cart!");
  };

  // dispatches the increaseQuantity action with the productId as a parameter to increase the quantity of the product in the cart.
  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  // dispatches the decreaseQuantity action with the productId as a parameter to decrease the quantity of the product in the cart.
  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  // used to update the cartProducts state whenever there are changes in the cartItems or products arrays.
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

  // Calculate the total number of products and total price of the cart
  const totalProducts = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  // calculates the the total price of all products added to the cart
  const totalPrice = cartProducts.reduce(
    (total, cartProduct) => total + cartProduct.price * cartProduct.quantity,
    0
  );

  // if cart is empty, this JSX structure is rendered
  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2 className="cartTitle">Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  // If the cartItems array is not empty, it returns a JSX element representing the cart.
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

      {/* Display total products and total price */}
      <div className="cartSummary">
        <p className="totalProducts">Total Products: {totalProducts}</p>
        <p className="totalPrice">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
