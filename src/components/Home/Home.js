import React from "react";
import ShoppingCard from "./ShoppingCard.js";

export default function Home() {
  const items = [
    { name: "Bananas", price: 0.5 },
    { name: "Apples", price: 0.6 },
    { name: "Avocados", price: 1.9 },
  ];
  return (
    <main>
      <h1>Shopping App</h1>
      <p>Items: ?</p>
      <p>Total Amount: ?</p>
      {items.map((item) => {
        return <ShoppingCard name={item.name} price={item.price} />;
      })}
    </main>
  );
}
