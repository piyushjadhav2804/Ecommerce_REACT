// import necessary dependencies
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";
import "../styles/form.css";

// AddProductForm component which takes input from user to add new Product
const AddProductForm = () => {
  const dispatch = useDispatch();

  // state variables
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // handler functions that update the corresponding state variables when the input fields' values change.
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  // submit event handler function that is triggered when the form is submitted
  const handleSubmit = (e) => {
    // prevents the default form submission behavior
    e.preventDefault();

    // creates a new product object using the current values of the state variables.
    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      image,
    };

    // dispatches the addProduct action with the new product data
    dispatch(addProduct(newProduct));

    alert("Product added successfully!");

    // resets the state variables to empty strings.
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  // JSX code that defines the form structure and elements to be rendered
  return (
    <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
      <div className="input-field">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="input-field">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="submit-button">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
