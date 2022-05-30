import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ShoppingCard from "./ShoppingCard.js";

export default function Home() {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const cart = localStorage.getItem("shopCart");
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shopCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const budgetStartValue = 30;
  const [budget, setBudget] = useState(budgetStartValue);

  const [itemNameInputValue, setItemNameInputValue] = useState("");
  const [itemPriceInputValue, setItemPriceInputValue] = useState("");

  function updateCart(id, newAmountValue, newTotalValue) {
    const cart = shoppingCart.map((item) => {
      if (item.id === id) {
        console.log(item);
        return { ...item, amount: newAmountValue, total: newTotalValue };
      } else {
        return item;
      }
    });
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
        <h1 className="header__app-title">Shopping App</h1>
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            const price = Number(
              itemPriceInputValue.replace(",", ".").replace(" ", "")
            );
            if (price <= budget) {
              let insert = true;
              shoppingCart.forEach((card) => {
                if (card.name === itemNameInputValue) {
                  insert = false;
                }
              });
              if (insert) {
                setBudget(budget - price);
                setShoppingCart([
                  {
                    id: nanoid(),
                    name: itemNameInputValue,
                    price: price,
                    amount: 1,
                    total: price,
                  },
                  ...shoppingCart,
                ]);
              } else {
                alert("You have already " + itemNameInputValue);
              }
            } else {
              alert("Your budget is too low!");
            }
            setItemNameInputValue("");
            setItemPriceInputValue("");
          }}
        >
          <label className="form__item-name-label form__label">
            item
            <input
              className="form__item-name-input form__input"
              required
              type="text"
              value={itemNameInputValue}
              onChange={(event) => {
                setItemNameInputValue(event.target.value);
              }}
            />
          </label>
          <label className="form__item-price-label form__label">
            price
            <input
              className="form__item-price-input form__input"
              required
              type="text"
              value={itemPriceInputValue}
              onChange={(event) => {
                setItemPriceInputValue(event.target.value);
              }}
            />
          </label>
          <button className="form__btn-add" type="submit">
            <span className="form__btn-add-icon">&#10133;</span> add
          </button>
        </form>
      </header>
      <main>
        {shoppingCart
          .sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          })
          .map((item) => {
            return (
              <ShoppingCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                total={item.total}
                updateCart={updateCart}
                deleteItem={deleteItem}
                budget={budget}
                updateBudget={setBudget}
              />
            );
          })}
      </main>
      <footer>
        <p className="footer__budget">
          Budget:{" "}
          {budget.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          €
        </p>
        <p className="footer__items">{allItems()} Items</p>
        <p className="footer__total-price">
          Total Price:{" "}
          {sumAllPrices().toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          €
        </p>
      </footer>
    </>
  );
}
