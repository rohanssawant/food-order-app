export const ACTIONS = { ADD: "add-item", REMOVE: "remove-item" };

export default function CartReducer(currentState, action) {
  console.log(currentState);
  switch (action.type) {
    case ACTIONS.ADD:
      const updatedItems = currentState.items.concat(action.item);
      const updatedTotalAmount =
        currentState.totalAmount + action.item.price * action.item.amount;
      console.log(updatedTotalAmount);
      console.log(typeof currentState.totalAmount);
      console.log(typeof action.item.price);
      console.log(typeof action.item.amount);
      return { items: updatedItems, amount: updatedTotalAmount };

    default:
      return currentState;
  }
}
