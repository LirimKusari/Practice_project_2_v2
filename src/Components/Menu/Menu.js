import React, { useContext, useState } from "react";
import styled from "styled-components";
import CartContext from "../Store/cart-context";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

const MenuWrapper = styled.div`
  .menu {
    margin-top: 3rem;
    margin-bottom: 4rem;
    max-width: 100%;
    background: white;
  }
`;

const Menu = () => {
  const ctx = useContext(CartContext);
  const [orders, setorders] = useState(ctx);

  const submitHandler = (id, amount) => {
    for (const key in orders) {
      const element = orders[key];
      if (element.key === id) {
        element.orders += +amount;
      }
      let temp = [...orders];
      temp[key] = element;
      console.log(temp);
      setorders(temp);
      console.log("ctx", ctx);
    }
  };

  return (
    <MenuWrapper>
      <Card className="menu">
        {ctx.map((order) => {
          return (
            <MenuItem
              onAdd={submitHandler}
              order={order}
              key={order.key}
            ></MenuItem>
          );
        })}
      </Card>
    </MenuWrapper>
  );
};

export default Menu;
