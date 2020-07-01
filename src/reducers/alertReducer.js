const initState = {
  showAlert: false,
  title: "",
  body: ""
}

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW-ALERT":
      return { ...state, showAlert: true, title: action.title, body: action.body }
    case "HIDE-ALERT":
      return { ...state, showAlert: false, title: "", body: "" }
    default:
      return state
  }
}

export default alertReducer;