export const useInputFeedback = (isValid, event, callback) => {

  const { target: { id, style } } = event;
  let value={}
  value[id] = isValid;

  if (isValid) {
    style.borderBottom = "2px solid var(--primary-color)";
  } else {
    style.borderBottom = "2px solid red";
  }

  callback(value);
}