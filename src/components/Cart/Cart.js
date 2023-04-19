import styles from "./Cart.module.css";
import Modal from "./Modal";

export default function Cart(props) {
  const dumI = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
  ];
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {dumI.map((i) => (
        <li>{i.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.56</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
