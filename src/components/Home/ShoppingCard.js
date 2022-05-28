import React, { useState } from "react";

export default function ShoppingCard({
  name,
  price,
  amount,
  total,
  updateCart,
  wallet,
  updateWallet,
}) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{price}€ per piece</p>
      <button
        type="button"
        onClick={() => {
          if (wallet >= price) {
            const newAmount = amount + 1;
            const newPrice = total + price;
            const result = Math.round(newPrice * 100) / 100;
            updateCart(newAmount, result);
            const newWallet = wallet - price;
            updateWallet(Math.round(newWallet * 100) / 100);
          }
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          if (amount > 0) {
            const newAmount = amount - 1;
            const newPrice = total - price;
            const result = Math.round(newPrice * 100) / 100;
            updateCart(newAmount, result);
            const newWallet = wallet + price;
            updateWallet(Math.round(newWallet * 100) / 100);
          }
        }}
      >
        -
      </button>
      <p>amount: {amount}</p>
      <p>total: {total}€</p>
    </section>
  );
}
