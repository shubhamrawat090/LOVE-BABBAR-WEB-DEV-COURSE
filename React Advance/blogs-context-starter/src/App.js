import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    // Fetch the inital Blogposts data
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="my-[100px]">
        <Blogs />
        <Pagination />
      </div>
    </>
  );
}
