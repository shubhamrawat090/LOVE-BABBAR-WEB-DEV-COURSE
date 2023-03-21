import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      <p>About Page</p>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
}
