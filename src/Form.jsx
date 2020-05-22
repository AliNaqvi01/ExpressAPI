import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "./index.css";

function FormPage() {
  //useState dynamically updates the data
  const [data, setData] = useState({ phone: "", email: "" });

  // This function sends a POST request to the server to store the data in the DB
  function sent() {
    alert("Stored to Database!");
  }

  const send = () => {
  // This is the route the server uses
    fetch("http://127.0.0.1:8081/form", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      // We send the email and phone data in
      body: JSON.stringify({ email: data.email, phone: data.phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="parent">
      <link
        rel="stylesheet"
        // Styleheet link
        href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
        integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
        crossorigin="anonymous"
      ></link>
      <div id="child">
        <form class="pure-form">
          <fieldset>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="Email"
              class="pure-input-rounded"
            />
            <input
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              type="tel"
              id="phone"
              name="phone"
              // RegEx to pattern match a phone number
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required
              placeholder="10 Digit Phone number"
              class="pure-input-rounded"
            />
            <button
            // The button sends the data to the server
              id="button1"
              onClick={(e) => {
                e.preventDefault();
                send();
                sent();
              }}
            >
              Submit
            </button>
          </fieldset>
        </form>
        <div id="link1">
          <Link to="/api"> API </Link>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
