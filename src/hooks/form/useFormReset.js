export const useFormReset = (state, action) => {
  const value = {};
  Object.keys(state).forEach(i => {
    value[i] = "";
  })
  action(value);
}