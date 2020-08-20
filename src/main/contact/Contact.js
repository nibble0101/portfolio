import React from "react";

function Contact(props) {
    return <section className = "contact-form-wrapper">
        <h2 id = "contact"> GET IN TOUCH </h2>
        <form action = "POST" onSubmit = {() => null} >
            <input type = "text" name = "name" placeholder = "Name"  required />
            <input type = "email" name = "email" placeholder = "Email"  required />
            <textarea  name = "message" placeholder = "Message"  /> 
            <input type = "submit" value = "SEND" />
        </form>
    </section>
    
}

export default Contact;