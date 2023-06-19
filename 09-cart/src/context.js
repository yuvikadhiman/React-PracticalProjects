import React, { children } from "react";
import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import cartItems from "./data";
import { getTotals } from "./utiles";
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const Appcontext = createContext();

//  const Cartitems=cartItems.map((item)=>[item.id,item])
//  console.log(Cartitems)
//  const cartitems= new Map(Cartitems) ;
//  console.log(cartitems)

const intialstate = {
  loading: false,
  cart: new Map()
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const ClearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const Remove = (id) => {
    dispatch({ type: REMOVE, id: id });
  };
  const Increase = (id) => {
    dispatch({ type: INCREASE, id: id });
  };
  const Decrease = (id) => {
    dispatch({ type: DECREASE, id: id });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    console.log(cart)
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Appcontext.Provider
      value={{
        ...state,
        ClearCart,
        Remove,
        Increase,
        Decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => useContext(Appcontext);
