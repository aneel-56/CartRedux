const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    }
    
    
    // eslint-disable-next-line no-fallthrough
    case "RMV_CART": {
      const filteredCarts = state.carts.filter(
        (ele) => ele.id !== action.payload
      );
      return {
        ...state,
        carts: filteredCarts,
      };
    }
    case "RMV_ONE": {
      const itemIndexDec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndexDec].qnty >= 1) {
        const dltitems = (state.carts[itemIndexDec].qnty -= 1);
        console.log([...state.carts, dltitems]);
        return { ...state, carts: [...state.carts] };
      }
    }
    
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
