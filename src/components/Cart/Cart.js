import { useContext } from "react";
import cartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import Modal from "./Modal";

export default function Cart(props) {
  const CartContext = useContext(cartContext);
  console.log(CartContext);
  const totalAmount = `$${CartContext.totalAmount.toFixed(2)}`;
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {CartContext.items.map((i) => (
        <li>{i.name}</li>
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
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
