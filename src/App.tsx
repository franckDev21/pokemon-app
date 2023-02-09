import { Route } from "react-router";
import { Routes, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>Not fount !</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
