import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import "../styles/products.css";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="productsContainer">
      {products.map((product) => (
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
