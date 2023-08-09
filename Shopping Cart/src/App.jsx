import { useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";
import { cartReducer } from "./reducers/cartReducers";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });

    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  );
}
