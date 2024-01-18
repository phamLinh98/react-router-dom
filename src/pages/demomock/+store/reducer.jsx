//Xu ly behind the scenes (Reducer)

import { loadAction } from "./action";
import { loadError } from "./action";
import { loadingAction } from "./action";
import { loadedAction } from "./action";

export function demoReducer(state, action) {
  switch (action.type) {
    case loadAction.type: {
      return { ...state, type: action.type };
    }
    case loadingAction.type: {
      return { ...state, type: action.type, loading: true };
    }
    case loadedAction.type: {
      return {
        ...state,
        type: action.type,
        loading: false,
        list: action.payload,
      };
    }
    case loadError.type: {
      return {
        ...state,
        type: action.type,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
