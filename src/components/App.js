// import necessary dependencies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";

// App componenet represents the root component of your application
function App() {
  return (
    // The Router component wraps the entire application to enable routing functionality.
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
