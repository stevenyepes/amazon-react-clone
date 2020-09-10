export const initialState = {
  basket: [],
  subtotal: 0,
};

const reducer = (state, action) => {
  console.log(action);

  const getSubtotal = () => {
    return state.basket
      .map((i) => i.price)
      .reduce((acc, price) => acc + price, 0);
  };

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        subtotal: getSubtotal(),
      };
    default:
      return state;
  }
};

export default reducer;
