import React, { useEffect } from "react";
import { useReducer } from "react";

export default function UsingReducer() {
  //Xu ly behind the scenes (Reducer)
  const sauCanhGa = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };

  //Khoi tao init value ban dau, cung cap ham behind the scenes (Reducer) cho useReducer
  //   const initValue = { count: 0 };
  // tao 1 state de quan ly trang thai cho component nay
  const [state, dispatch] = useReducer(sauCanhGa, { count: 0 });

  useEffect(() => {
    console.log("Trang da duoc re-render lai");
  });

  //Cac menh lenh , action (dispatch là hàm gui action den reducer)
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <div>
        {/* Render UI */}
        <p>Count:{state.count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}
