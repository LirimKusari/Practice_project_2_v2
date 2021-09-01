import React, { useState, useContext } from "react";
import CartContext from "../Store/cart-context";

import styled from "styled-components";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .adjustCart {
    display: flex;
    align-items: center;
    justify-content: center;
    AddIcon {
      width: 5rem;
      height: 80%;
    }
    .button {
      width: 3rem;
      height: 2.3rem;
      margin: 0 0.2rem;
    }
  }

  .info {
    .orderName {
      display: flex;
    }
    .pricing {
      display: flex;
      align-items: center;
      padding: 0 0rem;

      p {
        width: 3rem;
      }

      h4 {
        margin-left: 5rem;
        width: 1.8rem;
        border: 1px solid black;
        padding: 0.3rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const CartItem = ({ order }) => {
  const ctx = useContext(CartContext);
  // order.name = "lirim"; thisssss worksss
  // console.log("11", order);
  // console.log("22", order);
  console.log("33", ctx);

  const name = order.name;
  order.name = "lirim";
  console.log("44 ", ctx);

  const price = order.price;
  const [orders, setOrders] = useState(order.orders);

  const addOrder = (event) => {
    event.preventDefault();
    order.orders = +order.orders + 1;
    setOrders(order.orders);
    console.log("Cart ctx", ctx);
  };

  const removeOrder = (event) => {
    event.preventDefault();
    if (order.orders >= 1) {
      order.orders = +order.orders - 1;
    }
    setOrders(orders.order);
    console.log("Cart ctx", ctx);
  };

  return (
    <CartItemWrapper>
      <div className="info">
        <div className="orderName">
          <h2>{name}</h2>
        </div>
        <div className="pricing">
          <p>{price}</p>
          <h4>{orders + "X"}</h4>
        </div>
      </div>
      <div className="adjustCart">
        <button className="button " onClick={addOrder}>
          <AddIcon></AddIcon>
        </button>
        <button className="button" onClick={removeOrder}>
          <RemoveIcon></RemoveIcon>
        </button>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
