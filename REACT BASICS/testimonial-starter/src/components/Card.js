import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Card(props) {
  let review = props.review;
  return (
    <div>
      <div>
        <img src={review.image} />
      </div>

      <div>
        <p>{review.name}</p>
        <p>{review.job}</p>
      </div>

      <div>
        <FaQuoteLeft />
      </div>

      <div>{review.text}</div>

      <div>
        <FaQuoteRight />
      </div>
    </div>
  );
}
