import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import ProductSorter from "./ProductSorter";

import "../styles/products.css";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const sortBy = useSelector((state) => state.sort.sortBy);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  return (
    <div className="productsContainer">

      <ProductSorter />
      {sortedProducts.map((product) => (
        <div className="card" key={product.id}>
          <div className="product-image">
            <img className="image" src={product.image} alt={product.name} />
          </div>

          <div className="product-detail">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
