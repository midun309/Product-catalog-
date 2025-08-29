import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Catalog</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 200px)",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{ width: "100%", height: 120, objectFit: "cover" }}
            />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
