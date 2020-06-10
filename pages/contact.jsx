import React, { useState } from 'react';
import Head from 'next/head';
import style from '../src/pages_styles/contact.module.css';
import Layout from '../components/layout'

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

  const nameChangeHandler = (e) => {
    setFormVal({
      ...formVal,
      name: e.target.value
    });

    if (String(e.target.value).length <= 4) {
      e.target.style.borderBottom = "2px solid red";
      setValid({ ...valid, name: false });
    } else {
      e.target.style.borderBottom = "2px solid var(--primary-color)";
      setValid({ ...valid, name: true });
    }
  }

  const emailChangeHandler = (e) => {
    setFormVal({
      ...formVal,
      email: e.target.value
    });

    const validate = String(e.target.value).match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!validate) {
      e.target.style.borderBottom = "2px solid red";
      setValid({ ...valid, email: false });
    } else {
      e.target.style.borderBottom = "2px solid var(--primary-color)";
      setValid({ ...valid, email: true });
    }
  }

  const messageChangeHandler = (e) => {
    setFormVal({
      ...formVal,
      message: e.target.value
    });

    if (String(e.target.value).length <= 9) {
      e.target.style.borderBottom = "2px solid red";
      setValid({ ...valid, message: false });
    } else {
      e.target.style.borderBottom = "2px solid var(--primary-color)";
      setValid({ ...valid, message: true });
    }
  }

  const sendMessageHandler = () => {
    const { name, email, message } = valid;
    if (name && email && message) {
      fetch("https://uyi4098e01.execute-api.ap-south-1.amazonaws.com/beta",
        {
          method: 'POST',
          body: JSON.stringify(formVal)
        })
        .then(response => {
          setFormVal({
            name: "",
            email: "",
            message: ""
          })
        })
        .catch(err => {
          setFormVal({
            name: "",
            email: "",
            message: ""
          })
        })
    } else {
      alert("oooppss.. please fill out the form correctly.")
    }
  }

  return (
    <Layout watermark={"contact"}>
      <Head>
        <title>Contact Me</title>
      </Head>

      <div className={contact}>
        <div className={content}>
          <h1 style={{margin: "0", color: "var(--selected-font-color)", fontSize: "x-large"}}>Send me a message</h1>
          <div className={form}>
            <label className={name_label}>Your Name</label>
            <input className={name} value={formVal.name} onChange={nameChangeHandler}></input>
            <label className={email_label}>E-mail</label>
            <input className={email} value={formVal.email} onChange={emailChangeHandler}></input>
            <label className={message_label}>Message</label>
            <textarea className={message} value={formVal.message} onChange={messageChangeHandler}></textarea>
          </div>
          <button className={send_button} onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;