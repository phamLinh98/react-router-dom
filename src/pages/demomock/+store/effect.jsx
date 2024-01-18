import { useEffect } from "react";
import DemomockService from "../../../services/DemomockService";
import { createContext } from "react";
import { loadAction, loadError, loadedAction, loadingAction } from "./action";
import { demoReducer } from "./reducer";
import { useReducer } from "react";
// import { initState } from "./state";

export const DemoStoreContext = createContext({});

export default function DemoEffect({ children }) {
  const [state, dispatch] = useReducer(demoReducer, { list: [] });
  useEffect(() => {
    if (state.type === loadAction) {
      dispatch(loadingAction);
      DemomockService.get()
        .then((data) => {
          dispatch({ ...loadedAction, payload: data });
        })
        .catch((error) => {
          dispatch({ ...loadError, payload: error });
        });
    }
  }, [state]);
  return (
    <DemoStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoStoreContext.Provider>
  );
}
