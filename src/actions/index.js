export const alertMessage = (status) => {
  return (dispatch, getState) => {
    // setTimeout(() => console.log("yey!"), 5000)

    if (status === "success") {
      dispatch({
        type: "SHOW-ALERT",
        title: "Message Sent!",
        body: "Thank you for messaging me. I'll get back to you soon."
      })
    }
    else {
      dispatch({
        type: "SHOW-ALERT",
        title: "Oooppss..",
        body: "Please fill out the form correctly."
      })
    }
  }
}
