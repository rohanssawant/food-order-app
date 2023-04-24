import { useReducer } from "react";
import CartContext from "./cart-context";
import CartReducer, { ACTIONS } from "./CartReducer";

const defaultCartState = { items: [], totalAmount: 0 };

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ACTIONS.ADD, item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: ACTIONS.REMOVE, id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
