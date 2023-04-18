import styles from "./Cart.module.css";

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
    <ul>
      {dumI.map((i) => (
        <li>{i.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}
