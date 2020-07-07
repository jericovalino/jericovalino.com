import React, { useState } from 'react';
import {
  contact, content,
  form, name_label,
  name, email_label,
  email, message_label,
  message, send_button
} from '../src/pages_styles/contact.module.css';

import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { alertMessage } from '../src/actions';
import { useInputFeedback, useFormReset, useSendMessage } from '../src/hooks/form';
import { nameValidator, emailValidator, messageValidator } from '../src/utils/formValidator';
import Alert from '../components/alert';

const Contact = () => {

  const [formValue, setFormValue] = useState({
    name: "", email: "", message: ""
  })

  const [formIsValid, setFormIsValid] = useState({
    name: false, email: false, message: false
  })

  const dispatch = useDispatch();
  const sendMessage = useSendMessage();
  const formValReset = useFormReset(formValue, setFormValue);
  const isValidReset = useFormReset(formIsValid, setFormIsValid);
  
  const sendMessageHandler = async () => {
    const { name, email, message } = formIsValid;
    if (name && email && message) {
      if (await sendMessage(formValue)) {
        formValReset();
        isValidReset();
        dispatch(alertMessage("success"));
      }
    } else {
      dispatch(alertMessage());
    }
  }

  const inputOnChangeHandler = (e, validation) => {
    const isValid = validation(e)
    const targetValue = new Object();
    targetValue[e.target.id] = e.target.value;
    setFormValue({ ...formValue, ...targetValue });
    useInputFeedback(isValid, e, (value) => {
      setFormIsValid({ ...formIsValid, ...value });
    })
  }

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>

      <Alert />
      <div className={contact}>
        <div className={content}>
          <h1>Send me a Message</h1>
          <form className={form}>
            <label className={name_label}>Your Name</label>
            <input
              id="name"
              className={name}
              placeholder="name"
              value={formValue.name}
              onChange={(e) =>
                inputOnChangeHandler(e, nameValidator)} />
            <label className={email_label}>E-mail</label>
            <input
              id="email"
              className={email}
              placeholder="@"
              value={formValue.email}
              onChange={(e) =>
                inputOnChangeHandler(e, emailValidator)} />
            <label className={message_label}>Message</label>
            <textarea
              id="message"
              className={message}
              placeholder="..."
              value={formValue.message}
              onChange={(e) =>
                inputOnChangeHandler(e, messageValidator)} />
          </form>
          <button
            className={send_button}
            onClick={sendMessageHandler}>
            Send
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact;