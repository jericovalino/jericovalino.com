export const useFormReset = (state, action) => {

  const reset = () => {
    const value = {};
    Object.keys(state).forEach(i => {
      value[i] = "";
    })
    action(value);
  }

  return reset;
}