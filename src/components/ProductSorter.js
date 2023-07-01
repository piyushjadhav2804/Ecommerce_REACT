import { React } from "react";
import "../styles/sort.css";
import { sortProducts, resetSort } from "../actions/sortActions";
import { useDispatch, useSelector } from "react-redux";

const ProductSorter = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.sort.sortBy);

  const handleSort = () => {
    dispatch(sortProducts("price"));
  };

  const handleResetSort = () => {
    dispatch(resetSort());
  };

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
