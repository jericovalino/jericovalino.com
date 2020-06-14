import React, { useState } from 'react';
import Head from 'next/head';
import style from '../src/pages_styles/contact.module.css';
import Layout from '../components/layout'

import regex from '../src/utils/regex';

const { contact, content,
  form, name_label,
  name, email_label,
  email, message_label,
  message, send_button } = style;

const Contact = () => {

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

  const lineColorHandler = (isValid, blockName, e) => {
    if (!isValid) {
      e.target.style.borderBottom = "2px solid red";
      if (blockName == "name") setValid({ ...valid, name: false})
      else if (blockName == "email") setValid({ ...valid, email: false})
      else if (blockName == "message") setValid({ ...valid, message: false})
    } else {
      e.target.style.borderBottom = "2px solid var(--primary-color)";
      if (blockName == "name") setValid({ ...valid, name: true})
      else if (blockName == "email") setValid({ ...valid, email: true})
      else if (blockName == "message") setValid({ ...valid, message: true})
    }
  }

  const nameChangeHandler = (e) => {
    setFormVal({ ...formVal, name: e.target.value });
    const validate = String(e.target.value).length >= 4;
    lineColorHandler(validate, e.target.id, e)
  }

  const emailChangeHandler = (e) => {
    setFormVal({ ...formVal, email: e.target.value });
    const validate = String(e.target.value).match(regex.email)
    lineColorHandler(validate, e.target.id, e)
  }

  const messageChangeHandler = (e) => {
    setFormVal({ ...formVal, message: e.target.value });
    const validate = String(e.target.value).length >= 9;
    lineColorHandler(validate, e.target.id, e)
  }

  const sendMessageHandler = () => {
    const { name, email, message } = valid;
    if (name && email && message) {
      fetch("https://uyi4098e01.execute-api.ap-south-1.amazonaws.com/beta",
        { method: 'POST', body: JSON.stringify(formVal) })
        .then(() => { setFormVal({ name: "", email: "", message: "" }) })
        .catch(() => { setFormVal({ name: "", email: "", message: "" }) })
    } else { alert("oooppss.. please fill out the form correctly.") }
  }

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>

      <Layout watermark={"contact"}>
        <div className={contact}>
          <div className={content}>
            <h1>Send me a message</h1>
            <form className={form}>
              <label className={name_label}>Your Name</label>
              <input id="name" className={name} value={formVal.name} onChange={nameChangeHandler} />
              <label className={email_label}>E-mail</label>
              <input id="email" className={email} value={formVal.email} onChange={emailChangeHandler} />
              <label className={message_label}>Message</label>
              <textarea id="email" className={message} value={formVal.message} onChange={messageChangeHandler} />
            </form>
            <button className={send_button} onClick={sendMessageHandler}>Send</button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact;