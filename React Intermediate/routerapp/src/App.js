import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Support from "./components/Support";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
