import styled, { createGlobalStyle } from "styled-components";
import React, { useContext } from "react";
import Card from "./Components/UI/Card";
import Menu from "./Components/Menu/Menu";
import MainHeader from "./Components/Header/MainHeader";
import Cart from "./Components/Cart/Cart";

import CartContext from "./Components/Store/cart-context";

const data = [
  {
    name: "Roasted Chicken",
    description: "Some black ass soul food",
    orders: 0,
    price: 15.3,
    key: "Roasted Chicken",
  },
  {
    name: "Schnitzel",
    description: "A german speciality!",
    orders: 0,
    price: 16.5,
    key: "Schnitzel",
  },
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    orders: 0,
    price: 22.99,
    key: "Sushi",
  },
  {
    name: "Barbecue Burger",
    description: "Grilled barbecue burger",
    orders: 0,
    price: 12.99,
    key: "Barbecue Burger",
  },
];

const Body = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #262526;
  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .aboutUS {
    max-width: 50%;
    margin-top: 14rem;
    padding: 0 1rem 2rem 1rem;
    text-align: center;
    background: #323032;

    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

function App() {
  return (
    <AppWrapper>
      <Body />
      <MainHeader></MainHeader>

      <Card className="aboutUS">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Chose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experinced chefs!
        </p>
      </Card>

      <CartContext.Provider value={data}>
        <Menu></Menu>
        <Cart></Cart>
      </CartContext.Provider>
    </AppWrapper>
  );
}

export default App;
