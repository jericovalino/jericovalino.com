export const useSendMessage = () => {

  const sendMessage = async (formValue) => {
    await fetch("https://uyi4098e01.execute-api.ap-south-1.amazonaws.com/beta",
      { method: 'POST', body: JSON.stringify(formValue) })
      .then(() => {
        // setStatus(true);
      })
      .catch(() => {
        // setStatus(true);
      })
    return true;
  }

  return sendMessage;
}