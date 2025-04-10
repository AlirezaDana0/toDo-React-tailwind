import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Countries" element={<Countries />}/>
      </Routes>
    </div>
  );
}
export default Router;
