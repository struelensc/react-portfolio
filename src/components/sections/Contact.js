import React, { useState } from "react";
import { validateEmail } from "./form_assets/helpers";
import "../../styles/form.css";

function Form() {
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "inputName") {
      setInputName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      return;
    }
    if (!inputName) {
      setErrorMessage("Name is required.");
      return;
    }
    if (!message) {
      setErrorMessage("A message is required.");
      return;
    }

    setInputName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="formContainer">
      <form className="col-lg-6 offset-lg-3 form-group">
        <div className="py-2">
          <label className="pink" for="nameInput">
            Name
          </label>
          <input
            id="nameInput"
            className="form-control form-control-lg py-3"
            value={inputName}
            name="inputName"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>

        <div className="py-2">
          <label className="pink" for="emailInput">
            Email
          </label>
          <input
            id="emailInput"
            type="email"
            className="form-control form-control-lg"
            placeholder="name@example.com"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div className="py-2">
          <label className="pink" for="messageInput">
            Message
          </label>
          <textarea
            id="messageInput"
            className="form-control form-control-lg"
            rows="3"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          ></textarea>
        </div>

        <div className="py-2">
          <button
            className="button-extended"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
