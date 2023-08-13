import React from "react";
import Assesment from "./pages/Assesment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assesment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
