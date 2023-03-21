import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  function clickHandler() {
    // move to about page
    navigate("/about");
  }
  return (
    <div>
      <p>Contact Page</p>
      <button onClick={clickHandler}>Move to about page</button>
    </div>
  );
}
