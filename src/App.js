import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };
  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
