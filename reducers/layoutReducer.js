const initState = {
  watermark: "about"
};

const layoutReducer = (state = initState, action) => {
  if (action.type === "CHANGE_LABEL") {
    state = { ...state, watermark: action.label};
  }
  return state;
}

export default layoutReducer;