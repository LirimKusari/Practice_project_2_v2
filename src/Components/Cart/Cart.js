import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import CartContext from "../Store/cart-context";

const CartWrapper = styled.div`
  width: 100%;

  .background {
    background: rgba(255, 0, 0, 0.3);
    padding: 5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    .card {
      width: 60rem;
      color: black;
      background: white;
      padding: 1rem 2rem;
    }
  }

  .totalPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Cart = () => {
  let ctx = useContext(CartContext);
  console.log("cart ctx", ctx);

  const getOrderTotal = () => {
    return ctx
      .map((order) => +order.price * +order.orders)
      .reduce((acc, curr) => (acc = +acc + curr));
  };

  return (
    <CartWrapper>
      <div className="background">
        <Card className="card">
          {ctx.length < 1 && (
            <h2 className="noOrders">
              There currently are no items in the cart
            </h2>
          )}
          {ctx.map((order) => (
            <CartItem order={order} key={order.key}></CartItem>
          ))}
          {ctx.length > 0 && (
            <div className="totalPrice">
              <h2>Total Amount</h2>
              <h2>${getOrderTotal()}</h2>
            </div>
          )}
        </Card>
      </div>
    </CartWrapper>
  );
};

export default Cart;
