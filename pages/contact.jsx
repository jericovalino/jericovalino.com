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

  const nameChangeHandler = (e) => {
    setFormVal({
      ...formVal,
      name: e.target.value
    })
  }

  const emailChangeHandler = (e) => {
    setFormVal({
      ...formVal,
      email: e.target.value
    })
  }

  const messageChangeHandler = (e) => {
    setFormVal({
      ...formVal,
      message: e.target.value
    })
  }

  const sendMessageHandler = () => {
    fetch("https://uyi4098e01.execute-api.ap-south-1.amazonaws.com/beta", {
      method: 'POST',
      // mode: 'cors',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(formVal)
    })
      .then(response => {
        setFormVal({
          name: "",
          email: "",
          message: ""
        })
        console.log("sending success", response)
      })
      .catch(err => {
        setFormVal({
          name: "",
          email: "",
          message: ""
        })
        console.log("unsuccessful", err)
      })
  }

  return (
    <Layout>
      <Head>
        <title>contact</title>
      </Head>

      <div className={contact}>
        <div className={content}>
          <div className={form}>
            <label className={name_label}>Your Name</label>
            <label className={email_label}>E-mail</label>
            <input className={name} value={formVal.name} onChange={nameChangeHandler}></input>
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