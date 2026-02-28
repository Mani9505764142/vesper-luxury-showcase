import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: 1 }
        ]
      };
    }

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREMENT":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        )
      };
      case "CLEAR_CART":
  return {
    ...state,
    items: []
  };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    (initial) => {
      const storedCart = localStorage.getItem("vesper_cart");
      return storedCart ? JSON.parse(storedCart) : initial;
    }
  );

  useEffect(() => {
    localStorage.setItem("vesper_cart", JSON.stringify(state));
  }, [state]);

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        dispatch,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}