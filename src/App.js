import "./App.css";
// import Create from "./Create";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Update";
import { lazy } from "react";

const Create = lazy(() => import("./Create"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
