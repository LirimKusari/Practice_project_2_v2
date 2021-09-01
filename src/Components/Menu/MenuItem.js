import React, { useState, useContext } from "react";
import styled from "styled-components";
import CartContext from "../Store/cart-context";

const MenuItemWrapper = styled.div`
  width: 70rem;
  color: black;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = ({ order, onAdd }) => {
  const [amount, setAmount] = useState(order.orders);
  return (
    <MenuItemWrapper>
      <div className="info">
        <h3>{order.orders}</h3>
        <p>{order.description}</p>
        <p className="price"></p>
      </div>

      <label htmlFor="add">Amount </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          onAdd(order.key, amount);
        }}
      >
        add
      </button>
    </MenuItemWrapper>
  );
};

export default MenuItem;
