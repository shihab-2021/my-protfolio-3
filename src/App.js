import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Details from "./Pages/Home/Details/Details";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/details/:id" element={<Details />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/details">
            <Route path=":userId" element={<Details />} />
          </Route>
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
