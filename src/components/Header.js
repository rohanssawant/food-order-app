import styles from "./Header.module.css";
import mealImg from "../assets/meals.jpg";
export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>

      <div className={styles["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food" />
      </div>
    </>
  );
}
