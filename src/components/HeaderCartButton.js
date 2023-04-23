import styles from "./HeaderCartButton.module.css";
import CartIcon from "./Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../store/cart-context";

export default function HeaderCartButton(props) {
  const cartContent = useContext(CartContext);

  const numberOfItems = cartContent.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  console.log(cartContent);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}
