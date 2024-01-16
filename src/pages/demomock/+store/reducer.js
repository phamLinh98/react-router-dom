//Xu ly behind the scenes (Reducer)

export const loadAction = {
  type: "load data from db",
};

export function demoReducer(state, action) {
  switch (action.type) {
    case loadAction.type: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
