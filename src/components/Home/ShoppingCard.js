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
    <section className="card">
      <button
        className="card__btn-delete"
        type="button"
        onClick={() => {
          updateBudget(budget + price * amount);
          deleteItem(id);
        }}
      >
        &#10060;
      </button>
      <h2 className="card__item-name">{name}</h2>
      <p className="card__price">
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        € each
      </p>
      <p className="card__amount">amount: {amount}</p>
      <p className="card__total-price">
        total:{" "}
        {total.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        €
      </p>
      <button
        className="card__btn-plus"
        type="button"
        onClick={() => {
          if (budget >= price) {
            const newAmount = amount + 1;
            const newPrice = total + price;
            const result = Math.round(newPrice * 100) / 100;
            updateCart(newAmount, result);
            const newBudget = budget - price;
            updateBudget(Math.round(newBudget * 100) / 100);
          } else {
            alert("Your budget is too low!");
          }
        }}
      >
        &#10133;
      </button>
      <button
        className="card__btn-minus"
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
        &#10134;
      </button>
    </section>
  );
}
