import React, { useContext } from "react";
import DemoEffect from "./+store/effect";
import { DemoStoreContext } from "./+store/effect";

export default function Demomock() {
  const { state, dispatch } = useContext(DemoStoreContext);
  return (
    <DemoEffect>
      <ul>
        {state?.list &&
          state.list.map((item, index) => <li key={index}>{item.text}</li>)}
      </ul>
    </DemoEffect>
  );
}
