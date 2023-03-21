import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          id="firstName"
          placeholder="Shubham"
          onChange={changeHandler}
        ></input>
      </form>
    </div>
  );
}

export default App;
