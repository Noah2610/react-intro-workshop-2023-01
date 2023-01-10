import { useState } from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function submitForm() {
        console.log("Sending form with data:");
        console.log(firstName, email, message);
        setFirstName("");
        setEmail("");
        setMessage("");
    }

    function handleChangeFirstName(event) {
        const value = event.target.value;
        setFirstName(value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Your first name"
                value={firstName}
                onChange={handleChangeFirstName}
            />
            <input
                type="text"
                placeholder="Your email address"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <textarea
                cols="30"
                rows="10"
                placeholder="Your message"
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default ContactForm;
