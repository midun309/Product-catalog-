import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/Productdetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}