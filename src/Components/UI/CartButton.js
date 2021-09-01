import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartButtonWrapper = styled.button`
  width: 15rem;
  height: 4rem;
  padding: 0 1.2rem;
  background: #411708;
  border: none;
  border-radius: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .count {
    height: 2.1rem;
    width: 2.7rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background: orange;
    border-radius: 50px;
  }
`;

const CartButton = () => {
  return (
    <CartButtonWrapper>
      <ShoppingCartIcon></ShoppingCartIcon>
      <h2>Your Cart</h2>
      <div className="count">
        <h2>2</h2>
      </div>
    </CartButtonWrapper>
  );
};

export default CartButton;
