import { useReducer } from "react";
import CartContext from "./cart-context";

const defalutCardState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  return defalutCardState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defalutCardState
  );

  const addItemToCartHandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (item) => {};

  const cartContext = {
    items: cartContext.items,
    totalAmount: cartState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
