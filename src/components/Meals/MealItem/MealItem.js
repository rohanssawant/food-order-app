import { useContext } from "react";
import cartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const CartContext = useContext(cartContext);
  const price = `$${props.price}`;
  const addItemToCartHandler = (amount) => {
    console.log(amount);
    CartContext.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
    </li>
  );
}
