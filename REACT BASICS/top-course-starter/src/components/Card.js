import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // pehle se like hua pada hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // pehle se liked nahi hai yeh course
      // insert karna hai yeh course liked courses mein
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty
        setLikedCourses((prev) => [...prev, course.id]);
      }

      toast.success("Liked Successfully");
    }
  }

  return (
    <div>
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt}></img>

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div>
        <p>{course.title}</p>
        <p>
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}
