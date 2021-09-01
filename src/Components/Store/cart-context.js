import React from "react";

const CartContext = React.createContext([
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
]);

export default CartContext;
