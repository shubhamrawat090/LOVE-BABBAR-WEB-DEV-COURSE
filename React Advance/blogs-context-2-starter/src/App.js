import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // either from searchparams or set page = 1
    const page = searchParams("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // tag wala page
      const tag = location.pathname.split("/").at(-1); // value after last "/" in URL
      
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
