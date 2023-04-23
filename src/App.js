import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };
  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
