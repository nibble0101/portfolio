import React from "react";

function Contact(props) {
    return <section className = "contact-form-wrapper">
        <h2> GET IN TOUCH </h2>
        <form name = "contact" action = "POST"  netlify >
            <input type = "text" name = "name" placeholder = "Name" autoComplete  required />
            <input type = "email" name = "email" placeholder = "Email" autoComplete required />
            <textarea  name = "message" placeholder = "Message" required /> 
            <input type = "submit" value = "SEND" />
        </form>
    </section>
    
}

export default Contact;