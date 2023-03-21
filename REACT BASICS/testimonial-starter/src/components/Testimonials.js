import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

function Testimonials(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseShiftHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
      <Card review={reviews[index]}></Card>

      <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          onClick={surpriseShiftHandler}
          className="bg-violet-400 hover:bg-violet-500"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
