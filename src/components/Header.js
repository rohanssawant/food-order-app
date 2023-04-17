import styles from "./Header.module.css";
import mealImg from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food" />
      </div>
    </>
  );
}
