import { useEffect } from "react";
import DemomockService from "../../../../src/services/DemomockService";
import { createContext } from "react";
import { demoReducer } from "./reducer";
import { useReducer } from "react";

export const DemoStoreContext = createContext({});

export default function DemoEffect({ children }) {
  const [state, dispatch] = useReducer(demoReducer, {list:[]});
  useEffect(() => {
    async function fetchData() {
      const data = await DemomockService.get();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <DemoStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoStoreContext.Provider>
  );
}
