export const initialState = {
  basket: [],
  user: null,
};

export const getbaskettotal = (basket) => {
  const data = basket?.reduce((acc, curr) => +curr.price + acc, 0);
  return data;
};

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding items to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic from removing items from basket
      const newbasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        //item exists
        newbasket.splice(index, 1);
      } else {
        // item does not exist
        console.warn(`cant remove ${action.id} as the item does not exist`);
      }
      return { ...state, basket: newbasket };

    case "SET_USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
}
