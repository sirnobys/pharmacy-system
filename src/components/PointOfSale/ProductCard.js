// src/components/ProductCard.js
import { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    // setQuantity(1); // Reset quantity
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <div className="flex items-center mt-3 space-x-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
