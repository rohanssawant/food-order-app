import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const price = `$${props.price}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
}
