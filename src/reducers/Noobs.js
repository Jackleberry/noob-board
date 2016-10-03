const noob = (state, action) => {
  switch (action.type) {
    case "ADD_NOOB":
      return {
        id: action.id,
        name: action.name,
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      };
    case "TOGGLE_NOOB":
      if (state.id != action.id) {
        return state;
      }

      return {
        ...state,
        outOfAction: !state.outOfAction
      };
    case "ADD_NOOB_POINT":
      if (state.id != action.id) {
        return state;
      }

      return {
        ...state,
        noobPoints: state.noobPoints + 1
      };
    case "ADD_ASSASSIN_POINT":
      if (state.id != action.id) {
        return state;
      }

      return {
        ...state,
        assassinPoints: state.assassinPoints + 1
      };
    default:
      return state;
  }

};

const noobs = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOOB":
      return [
        ...state,
        noob(state, action)
      ];
    case "TOGGLE_NOOB":
      return state.map(n => noob(n, action));
    case "ADD_NOOB_POINT":
      return state.map(n => noob(n, action));
    case "ADD_ASSASSIN_POINT":
      return state.map(n => noob(n, action));
    default:
      return state;
  }
};

export default noobs;
