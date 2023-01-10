import React from "react";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import "./style.css";

function App() {
  return (
    <>
        <div>
          <h1>Hello React!</h1>
        </div>
        
        <Button label="CLICK!" />
        <Button label="No click me instead" />
        <Button label="don't do it" />

        <ContactForm />
    </>
  )
}

export default App