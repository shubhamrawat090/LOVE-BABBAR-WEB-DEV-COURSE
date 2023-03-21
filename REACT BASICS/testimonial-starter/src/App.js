import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
