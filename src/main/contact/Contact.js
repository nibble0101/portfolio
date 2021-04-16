import React from "react";

function Contact(props) {

  return (
    <section className="contact-form-wrapper">
      <h2> GET IN TOUCH </h2>
      <form  method="post" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="true"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="true"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          autoComplete="true"
          required
          
        />
        <input type="submit" value="SEND" />
      </form>
    </section>
  );
}

export default Contact;
