'use client'
import Cart from '@/components/PointOfSale/Cart';
import ProductCard from '@/components/PointOfSale/ProductCard';
// import React from "react";
// import FormElements from "@/components/FormElements";
// import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

// export const metadata: Metadata = {
//   title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
//   description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
// };

// const PointOfSale = () => {
//   return (
//     <DefaultLayout>
//       <FormElements />
//     </DefaultLayout>
//   );
// };

// export default PointOfSale;
// src/pages/pos.js
import { useState } from 'react';
import SearchForm from '@/components/Header/SearchForm';


const products = [
  { id: 1, name: 'Aspirin', price: 10.5, image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/766x415_Is_Aspirin_an_NSAID-1-732x415.jpg' },
  { id: 2, name: 'Cough Syrup', price: 15.0, image: 'https://www.cofsils.com/uploadfile/product/dx_cough.jpg' },
  { id: 3, name: 'Vitamin C', price: 12.75, image: 'https://top-uppharmacy.com/wp-content/uploads/2023/07/Easylife-Vitamin-C-1000mg.jpg' },
];

export default function PointOfSale() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <DefaultLayout>
      <SearchForm />

      <div className="container mx-auto p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Pharmacy POS</h1> */}
        <div className="grid grid-cols-12 gap-4">
          <div className='col-span-8 p-2'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>

          </div>
          <div className='col-span-4' >
            <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
