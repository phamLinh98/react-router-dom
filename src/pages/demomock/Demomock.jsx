import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { demoReducer, loadAction } from "./+store/reducer";

export default function Demomock() {
  const [state, dispatch] = useReducer(demoReducer, {});

  useEffect(() => {
    dispatch(loadAction);
    state.subcribe && state.subcribe.then(data=> {
      dispatch({type:'Loaded',payload:data});
    })
  }, []);
  return (
    <>
      <ul>
        {state.list &&
          state.list.map((item, index) => <li key={index}>{item.text}</li>)}
      </ul>
    </>
  );
}
