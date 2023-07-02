  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { addProduct } from "../actions/productActions";
  import "../styles/form.css";

  const AddProductForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

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

    const handleSubmit = (e) => {
      e.preventDefault();
      const newProduct = {
        name,
        description,
        price: parseFloat(price),
        image,
      };
      dispatch(addProduct(newProduct));
      alert("Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      setImage("");

    };

    return (
      <form className="form-container" onSubmit={handleSubmit}>
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
