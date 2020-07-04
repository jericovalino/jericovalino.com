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

import Alert from '../components/alert';
import regex from '../src/utils/regex';

const Contact = () => {

  const dispatch = useDispatch();

  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [valid, setValid] = useState({
    name: false,
    email: false,
    message: false
  })

  const sendMessageHandler = () => {
    const { name, email, message } = valid;
    if (name && email && message) {
      fetch("https://uyi4098e01.execute-api.ap-south-1.amazonaws.com/beta",
        { method: 'POST', body: JSON.stringify(formVal) })
        .then(() => {
          setFormVal({ name: "", email: "", message: "" });
          setValid({ name: false, email: false, message: false });
          dispatch({
            type: "SHOW-ALERT",
            title: "Message Sent!",
            body: "Thank you for messaging me. I'll get back to you soon."
          })
        })
        .catch(() => {
          setFormVal({ name: "", email: "", message: "" });
          setValid({ name: false, email: false, message: false });
          dispatch({
            type: "SHOW-ALERT",
            title: "Message Sent!",
            body: "Thank you for messaging me. I'll get back to you soon."
          })
        })
    } else {
      dispatch({
        type: "SHOW-ALERT",
        title: "Oooppss..",
        body: "Please fill out the form correctly."
      })
    }
  }

  const lineColorHandler = (isValid, event) => {
    const { target: { id, style } } = event;
    let value = {}
    if (isValid) {
      value[id] = true;
      setValid({ ...valid, ...value })
      style.borderBottom = "2px solid var(--primary-color)";
    } else {
      value[id] = false;
      setValid({ ...valid, ...value })
      style.borderBottom = "2px solid red";
    }
  }

  const nameChangeHandler = (e) => {
    setFormVal({ ...formVal, name: e.target.value });
    const validate = e.target.value.length >= 4;
    lineColorHandler(validate, e)
  }

  const emailChangeHandler = (e) => {
    setFormVal({ ...formVal, email: e.target.value });
    const validate = e.target.value.match(regex.email)
    lineColorHandler(validate, e)
  }

  const messageChangeHandler = (e) => {
    setFormVal({ ...formVal, message: e.target.value });
    const validate = e.target.value.length >= 9;
    lineColorHandler(validate, e)
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
            <input id="name" className={name} placeholder="name" value={formVal.name} onChange={nameChangeHandler} />
            <label className={email_label}>E-mail</label>
            <input id="email" className={email} placeholder="@" value={formVal.email} onChange={emailChangeHandler} />
            <label className={message_label}>Message</label>
            <textarea id="message" className={message} placeholder="..." value={formVal.message} onChange={messageChangeHandler} />
          </form>
          <button className={send_button} onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </>
  )
}

export default Contact;