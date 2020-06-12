const initialState = {
  taks: [],
  pagination: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAKS":
      return {
        ...state,
        taks: action.payload.taks,
      };
    case "ADD_TAKS":
      return { ...state, taks: state.taks.concat(action.payload.taks) };
    case "DELETE_TAKS":
      const tempTaks = { ...state };
      const newTaks = tempTaks.taks.filter((taks) => {
        return taks.id !== action.payload.taksId;
      });
      return { ...state, taks: newTaks };
    default:
      return state;
  }
};
