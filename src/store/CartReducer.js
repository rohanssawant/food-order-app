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

    case ACTIONS.REMOVE:
      // 2 conditions ie If item is only 1 remove entirely from array else decrease only amount in array
      const existingItemIndexToRemove = currentState.items.findIndex(
        (i) => i.id === action.id
      );
      const existingCartItemToRemove =
        currentState.items[existingItemIndexToRemove];
      let updatedItemsAfterRemove;
      if (existingCartItemToRemove.amount === 1) {
        updatedItemsAfterRemove = currentState.items.filter(
          (item) => action.id !== item.id
        );
      } else {
        const updateItemToBeRemoved = {
          ...existingCartItemToRemove,
          amount: existingCartItemToRemove.amount - 1,
        };
        updatedItemsAfterRemove = [...currentState.items];
        updatedItemsAfterRemove[existingItemIndexToRemove] =
          updateItemToBeRemoved;
      }
      const totalAmountAfterRemove =
        currentState.totalAmount - existingCartItemToRemove.price;
      return {
        items: updatedItemsAfterRemove,
        totalAmount: totalAmountAfterRemove,
      };
    default:
      return currentState;
  }
}
