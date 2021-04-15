import React, { useState } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

function Contact(props) {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeHandler = (event) => {
      const { name, value } = event.target;
      setFormFields(prevValues => ({...prevValues, [name]: value }));
  }
  const onSubmitFormHandler = (event) => {
      fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({ "form-name": "contact", ...formFields })
      }).then(() => alert("Success"))
      .catch(err => console.log(err))
      event.preventDefault();
  }
  return (
    <section className="contact-form-wrapper">
      <h2> GET IN TOUCH </h2>
      <form onSubmit = {onSubmitFormHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formFields.name}
          onChange = {onChangeHandler}
          autoComplete="true"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formFields.email}
          onChange = {onChangeHandler}
          autoComplete="true"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formFields.message}
          onChange = {onChangeHandler}
          autoComplete="true"
          required
          
        />
        <input type="submit" value="SEND" />
      </form>
    </section>
  );
}

export default Contact;
