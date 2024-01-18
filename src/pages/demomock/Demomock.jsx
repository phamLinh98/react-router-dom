import { useContext, useEffect } from "react";
import { DemoStoreContext } from "./+store/effect";
import { loadAction } from "./+store/action";

export default function Demomock() {
  const { state, dispatch } = useContext(DemoStoreContext);

  useEffect(() => {
    dispatch(loadAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      {state?.loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {state?.list &&
            state.list.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
      )}
      {state?.error && <div>{state?.error}</div>}
    </>
  );
}
