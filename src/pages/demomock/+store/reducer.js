//Xu ly behind the scenes (Reducer)

import DemomockService from "../../../services/DemomockService";

export const loadAction = {
  type: "load data from db",
};

function effect() {
  return DemomockService.get();
}

export async function demoReducer(state, action) {
  switch (action.type) {
    case loadAction.type: {
      return {subcribe: effect() }; //giu nguyen state, chi update lai thuoc tinh data
    }
    default: {
      return state;
    }
  }
}
