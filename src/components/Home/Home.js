import React, { useState } from "react";
import ShoppingCard from "./ShoppingCard.js";

export default function Home() {
  const [shoppingCart, setShoppingCart] = useState([
    { name: "Bananas", price: 0.5, amount: 0, total: 0 },
    { name: "Apples", price: 0.6, amount: 0, total: 0 },
    { name: "Avocados", price: 1.9, amount: 0, total: 0 },
  ]);

  function updateCart(index, newAmountValue, newTotalValue) {
    const cart = [...shoppingCart];
    const item = { ...cart[index] };
    item.amount = newAmountValue;
    item.total = newTotalValue;
    cart[index] = item;
    setShoppingCart(cart);
  }

  function allItems() {
    let counter = 0;
    shoppingCart.forEach((item) => {
      counter += item.amount;
    });
    return counter;
  }
  function sumAllPrices() {
    let counter = 0;
    shoppingCart.forEach((item) => {
      counter += item.total;
    });
    return counter;
  }

  return (
    <main>
      <h1>Shopping App</h1>
      <p>Items: {allItems()}</p>
      <p>Total Amount: {sumAllPrices()}</p>
      {shoppingCart.map((item, index) => {
        return (
          <ShoppingCard
            name={item.name}
            price={item.price}
            amount={item.amount}
            total={item.total}
            updateCart={(newAmountValue, newTotalValue) =>
              updateCart(index, newAmountValue, newTotalValue)
            }
          />
        );
      })}
    </main>
  );
}
