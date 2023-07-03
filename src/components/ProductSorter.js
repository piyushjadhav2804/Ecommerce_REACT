// imports necessary dependencies
import { React } from "react";
import "../styles/sort.css";
import { sortProducts, resetSort } from "../actions/sortActions";
import { useDispatch, useSelector } from "react-redux";

// ProductSorter components handles the sorting of products on the basis of price
const ProductSorter = () => {

  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.sort.sortBy);

  // dispatches the sortProducts action with the argument "price" to sort the products by price.
  const handleSort = () => {
    dispatch(sortProducts("price"));
  };

  // dispatches the resetSort action to reset the sorting criteria.
  const handleResetSort = () => {
    dispatch(resetSort());
  };

  // JSX code that represents the structure and content of the ProductSorter component.
  return (
    <div className="sortButtonContainer">
      {sortBy ? (
        <button className="sortButton" onClick={handleResetSort}>
          Reset Sort
        </button>
      ) : (
        <button className="sortButton" onClick={handleSort}>
          Sort
        </button>
      )}
    </div>
  );
};

export default ProductSorter;
