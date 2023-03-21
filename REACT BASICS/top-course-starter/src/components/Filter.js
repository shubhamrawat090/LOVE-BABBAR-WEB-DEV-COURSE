import React from "react";

export default function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 max-w-max">
      {filterData.map((data) => (
        <button key={data.id} onClick={() => filterHandler(data.title)}>
          {data.title}
        </button>
      ))}
    </div>
  );
}
