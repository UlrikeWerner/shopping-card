import React, { useState } from "react";

export default function ShoppingCard({
  name,
  price,
  amount,
  total,
  updateCart,
}) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{price}€ per piece</p>
      <button
        type="button"
        onClick={() => {
          /*
          const cart = [...shoppingCart];
          cart[0].amount += 1;
          const p = cart[0].total + price;
          const result = Math.round(p * 100) / 100;
          cart[0].total = result;
          setShoppingCart(cart);*/
          const newAmount = amount + 1;
          const newPrice = total + price;
          const result = Math.round(newPrice * 100) / 100;
          updateCart(newAmount, result);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          /*
          const cart = [...shoppingCart];
          if (cart[0].amount > 0) {
            cart[0].amount -= 1;
            const p = cart[0].total - price;
            const result = Math.round(p * 100) / 100;
            cart[0].total = result;
          }
          setShoppingCart(cart);*/
          if (amount > 0) {
            const newAmount = amount - 1;
            const newPrice = total - price;
            const result = Math.round(newPrice * 100) / 100;
            updateCart(newAmount, result);
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
