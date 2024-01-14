import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useRef} from "react";

export default function UsingState() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  console.log(renderCount);
  useEffect(()=> {
    renderCount.current = renderCount.current + 1
  })
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}
