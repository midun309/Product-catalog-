import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/products">← Back to Products</Link>
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: 300 }}
      />
      <p>{product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Stock:</b> {product.stock}</p>
      <p><b>Category:</b> {product.category}</p>
    </div>
  );
}
