import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    } catch (error) {
      toast.error("Network failure");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
