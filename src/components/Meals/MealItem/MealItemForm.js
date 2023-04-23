import { useRef } from "react";
import Input from "../../../UI/Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const amountInputRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amt_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
}
