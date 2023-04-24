import { useContext } from "react";
import cartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";

export default function Cart(props) {
  const CartContext = useContext(cartContext);
  console.log(CartContext);
  const totalAmount = `$${CartContext.totalAmount.toFixed(2)}`;
  const hasItems = CartContext.items.length > 0;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {CartContext.items.map((i) => (
        <CartItem
          key={i.id}
          name={i.name}
          amount={i.amount}
          price={i.price}
          onRemove={cartItemRemoveHandler.bind(null, i.id)}
          onAdd={cartItemAddHandler.bind(null, i)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
