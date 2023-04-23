import CartContext from "./cart-context";

export default function CartProvider(props) {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => addItemToCartHandler,
    removeItem: (id) => removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
