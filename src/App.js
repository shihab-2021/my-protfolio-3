import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Home/Details/Details";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
