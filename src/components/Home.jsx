import React, { Fragment, useContext, useState } from "react";
import { Context } from "../App";

export default function Home() {
  const context = useContext(Context);
  const [currentColor, setCurrentColor] = useState(context.data);

  const toggleColor = () => {
    setCurrentColor((prevColor) => (prevColor === context.data ? '' : context.data));
  };

  return (
    <Fragment>
      <div style={{ ...currentColor }}>Day la trang Home</div>
      <button onClick={toggleColor}>Toggle Color</button>
    </Fragment>
  );
}
