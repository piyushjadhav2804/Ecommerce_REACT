// import necessary dependencies
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../actions/productActions";
import { addToCart, increaseQuantity } from "../actions/cartActions";
import ProductSorter from "./ProductSorter";

import "../styles/products.css";

// Product components renders the product list fetched from API
const Products = () => {
  // uses the useDispatch hook to dispatch actions to the Redux store.
  const dispatch = useDispatch();

  // uses the useSelector hook to extract from the Redux store state
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const sortBy = useSelector((state) => state.sort.sortBy);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // state variables
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  // used to fetch the products when the component is initially loaded.
  useEffect(() => {
    if (isInitialLoad && products.length === 0) {
      dispatch(fetchProducts());
      setIsInitialLoad(false);
    }
  }, [dispatch, isInitialLoad, products]);

  // dispatches the deleteProduct action with the productId as an argument
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    alert("Product deleted successfully!");
  };

  // These functions handle the editing functionality of the product.
  const handleEdit = (productId) => {
    setEditProductId(productId);
    setEditedProduct(products.find((product) => product.id === productId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(updateProduct(editedProduct));
    alert("Product updated successfully!");
    setEditProductId(null);
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
    setEditedProduct({});
  };

  // triggered when an "Add to Cart" button is clicked
  const handleAddToCart = (product) => {
    // checks if the product already exists in the cart by searching for an item with the same id
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    
    // If the item exists, it dispatches the increaseQuantity action to increase the quantity of that item
    if (existingCartItem) {
      dispatch(increaseQuantity(product.id));
    } 
    
    // dispatches the addToCart action to add the product to the cart.
    else {
      dispatch(addToCart(product));
    }

    alert("Product added to cart!");
  };

  // Sort the products based on the sort criteria
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    }
    // Add more sorting criteria if needed
    return 0;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // JSX code that represents the structure and content of the Products component.
  return (
    <div className="productsContainer">
      <ProductSorter />
      {sortedProducts.map((product) => (
        <div className="card" key={product.id}>
          <div className="product-image">
            <img className="image" src={product.image} alt={product.name} />
          </div>

          <div className="product-detail">
            {editProductId === product.id ? (
              <>
                <div className="inputContainer">
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name || ""}
                    onChange={handleInputChange}
                    className="editInput"
                  />
                </div>
                <div className="inputContainer">
                  <input
                    type="text"
                    name="description"
                    value={editedProduct.description || ""}
                    onChange={handleInputChange}
                    className="editInput"
                  />
                </div>
                <div className="inputContainer">
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price || ""}
                    onChange={handleInputChange}
                    className="editInput"
                  />
                </div>
                <div className="buttonContainer">
                  <button className="saveButton" onClick={handleSaveChanges}>
                    Save
                  </button>
                  <button className="cancelButton" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: {product.price}</p>

                <div className="buttonContainer">
                  <button
                    className="editButton"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="addToCartButton"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Products