import React from "react";
import "./ShoppingCard.css";

export default function ShoppingCard({
  id,
  name,
  price,
  amount,
  total,
  updateCart,
  deleteItem,
  budget,
  updateBudget,
}) {
  return (
    <section>
      <button
        className="btn-delete"
        type="button"
        onClick={() => {
          updateBudget(budget + price * amount);
          deleteItem(id);
        }}
      >
        X
      </button>
      <h2>{name}</h2>
      <p className="price">
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        € each
      </p>
      <p className="amount">amount: {amount}</p>
      <p className="total-price">
        total:{" "}
        {total.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        €
      </p>
      <button
        className="btn-plus"
        type="button"
        onClick={() => {
          if (budget >= price) {
            const newAmount = amount + 1;
            const newPrice = total + price;
            const result = Math.round(newPrice * 100) / 100;
            updateCart(newAmount, result);
            const newBudget = budget - price;
            updateBudget(Math.round(newBudget * 100) / 100);
          }
        }}
      >
        +
      </button>
      <button
        className="btn-minus"
        type="button"
        onClick={() => {
          if (amount > 0) {
            const newAmount = amount - 1;
            const newPrice = total - price;
            const result = Math.round(newPrice * 100) / 100;
            updateCart(newAmount, result);
            const newBudget = budget + price;
            updateBudget(Math.round(newBudget * 100) / 100);
          }
        }}
      >
        -
      </button>
    </section>
  );
}
