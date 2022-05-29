import React, { useState } from "react";
import { nanoid } from "nanoid";
import ShoppingCard from "./ShoppingCard.js";

export default function Home() {
  const [shoppingCart, setShoppingCart] = useState([
    { id: nanoid(), name: "Bananas", price: 0.5, amount: 0, total: 0 },
    { id: nanoid(), name: "Apples", price: 0.6, amount: 0, total: 0 },
    { id: nanoid(), name: "Avocados", price: 1.9, amount: 0, total: 0 },
  ]);

  const budgetStartValue = 30;
  const [budget, setBudget] = useState(budgetStartValue);

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

  function deleteItem(id) {
    setShoppingCart(shoppingCart.filter((item) => item.id !== id));
  }

  return (
    <>
      <header>
        <h1>Shopping App</h1>
      </header>
      <main>
        {shoppingCart.map((item, index) => {
          return (
            <ShoppingCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              total={item.total}
              updateCart={(newAmountValue, newTotalValue) =>
                updateCart(index, newAmountValue, newTotalValue)
              }
              deleteItem={deleteItem}
              budget={budget}
              updateBudget={setBudget}
            />
          );
        })}
      </main>
      <footer>
        <p>{allItems()} Items</p>
        <p>
          Total Price:{" "}
          {sumAllPrices().toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          €
        </p>
        <p>
          Budget:{" "}
          {budget.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          €
        </p>
      </footer>
    </>
  );
}
