export const ACTIONS = { ADD: "add-item", REMOVE: "remove-item" };

export default function CartReducer(currentState, action) {
  console.log(currentState);
  switch (action.type) {
    case ACTIONS.ADD:
      // TO CHECK IF SAME TYPE OF ITEM IS ADDED
      const existingItemIndex = currentState.items.findIndex(
        (i) => i.id === action.item.id
      );
      const existingCartItem = currentState.items[existingItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updateExistingItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...currentState.items];
        updatedItems[existingItemIndex] = updateExistingItem;
        console.log(updatedItems);
        console.log(typeof updatedItems);
      } else {
        updatedItems = currentState.items.concat(action.item);
        console.log(updatedItems);
        console.log(typeof updatedItems);
      }

      const updatedTotalAmount =
        (currentState.totalAmount || 0) +
        action.item.price * action.item.amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };

    default:
      return currentState;
  }
}
