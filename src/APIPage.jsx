import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./APIPage.css";

function APIPage() {
  var APIResp = "";
  const [res, setRes] = useState("");

// This is an AJAX function that uses Fetch to get the date in EST
  const send = () => {
    console.log("Sending...");
    fetch("http://worldclockapi.com/api/json/est/now", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
    // if the response is valid we save it
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        APIResp = data.dayOfTheWeek;
        setRes(APIResp);
        console.log(APIResp);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="parent">
      <div id="wrapper">
        <div id="link">
          <Link id="link" to="/">
            {" "}
            Home{" "}
          </Link>
        </div>
      </div>
      <button id="button2" onClick={() => send()}>
        Get API Data
      </button>
      <h1>It is currently {res} in Toronto</h1>
    </div>
  );
}

export default APIPage;
