import React, { useState } from "react";

export default function ShoppingCard({ name, price }) {
  const [shoppingCart, setShoppingCart] = useState([{ amount: 0, total: 0 }]);
  return (
    <section>
      <h2>{name}</h2>
      <p>{price}€ per piece</p>
      <button
        type="button"
        onClick={() => {
          const cart = [...shoppingCart];
          cart[0].amount += 1;
          const p = cart[0].total + price;
          const result = Math.round(p * 100) / 100;
          cart[0].total = result;
          setShoppingCart(cart);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          const cart = [...shoppingCart];
          if (cart[0].amount > 0) {
            cart[0].amount -= 1;
            const p = cart[0].total - price;
            const result = Math.round(p * 100) / 100;
            cart[0].total = result;
          }
          setShoppingCart(cart);
        }}
      >
        -
      </button>
      <p>amount: {shoppingCart[0].amount}</p>
      <p>total: {shoppingCart[0].total}€</p>
    </section>
  );
}
