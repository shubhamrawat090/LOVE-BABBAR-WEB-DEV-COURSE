import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // Fetch Blog Data
  const fetchBlogPosts = async (page = 1) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something Went Wrong");
      console.log("Api Response", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

  // Handle When Next and Previous button are clicked
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
    fetchBlogPosts(page);
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
