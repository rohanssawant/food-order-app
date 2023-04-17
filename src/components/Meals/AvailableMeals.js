import Card from "../../UI/Card";
import styles from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals(props) {
  const mealsList = DUMMY_MEALS.map((m) => (
    <MealItem
      key={m.id}
      id={m.id}
      name={m.name}
      description={m.description}
      price={m.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
