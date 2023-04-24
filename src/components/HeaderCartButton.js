import styles from "./HeaderCartButton.module.css";
import CartIcon from "./Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";

export default function HeaderCartButton(props) {
  const cartContent = useContext(CartContext);
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  console.log(cartContent);
  const btnClasses = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;
  // To add 'bump' animation class to Btn for 300ms & then remove it
  useEffect(() => {
    if (cartContent.items.length === 0) return;
    // Class added
    setIsBtnHighlighted(true);
    // Class removed after 300ms
    const timeoutBtnClass = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timeoutBtnClass);
    };
  }, [cartContent.items]);

  const numberOfItems = cartContent.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}
