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

  const dispatch = useDispatch();
  const sendMessage = useSendMessage();

  const [formVal, setFormVal] = useState({
    name: "", email: "", message: ""
  })

  const [valid, setValid] = useState({
    name: false, email: false, message: false
  })

  const sendMessageHandler = async () => {
    const { name, email, message } = valid;
    if (name && email && message) {
      if (await sendMessage(formVal)) {
        useFormReset(formVal, setFormVal);
        useFormReset(valid, setValid)
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
    setFormVal({ ...formVal, ...targetValue });
    useInputFeedback(isValid, e, (value) => {
      setValid({ ...valid, ...value });
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
              value={formVal.name}
              onChange={(e) =>
                inputOnChangeHandler(e, nameValidator)} />
            <label className={email_label}>E-mail</label>
            <input
              id="email"
              className={email}
              placeholder="@"
              value={formVal.email}
              onChange={(e) =>
                inputOnChangeHandler(e, emailValidator)} />
            <label className={message_label}>Message</label>
            <textarea
              id="message"
              className={message}
              placeholder="..."
              value={formVal.message}
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