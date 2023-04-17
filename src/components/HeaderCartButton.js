import styles from "./HeaderCartButton.module.css";
import CartIcon from "../icons/CartIcon";
export default function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}