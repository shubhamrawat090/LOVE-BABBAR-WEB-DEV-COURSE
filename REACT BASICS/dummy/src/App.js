import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  // ALL renders
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  // FIrst render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // }, []);

  // whenever dependency changes
  // useEffect(() => {
  //   console.log("Changed");
  // }, [text]);

  // handle unmounting of a component
  useEffect(() => {
    //add event listener
    console.log("listener added");

    // CLEANUP FUNCTION
    // This runs before the above code BUT
    // first time this cleanup function doesn't run
    return () => {
      console.log("listener Removed");
    };
  }, [text]);

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
