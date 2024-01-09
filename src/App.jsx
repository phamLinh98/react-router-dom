import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { createContext } from "react";
import './App.scss';

export const Context = createContext();

function App() {
  const dulieucss = {background:'blue', height:'500px',width:'500px'};
  return (
    <>
      <Context.Provider value={{data:dulieucss}}>
        <RouterProvider router={router} />
      </Context.Provider>
    </>
  );
}

export default App;
