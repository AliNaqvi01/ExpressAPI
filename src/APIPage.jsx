import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./APIPage.css";

function APIPage() {
  var APIResp = "";
  const [res, setRes] = useState("");

  const send = () => {
    console.log("Sending...")
    fetch("http://worldclockapi.com/api/json/est/now", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        APIResp = data.currentDateTime;
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
            <Link id="link" to="/"> Home </Link>
        </div>
        </div>
      <button id="button2" onClick={() => send()}>
        Get API Data
      </button>
      <h1>The value is : {res}</h1>
    </div>
  );
}

export default APIPage;
