import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-3xl text-blue-500 font-bold">
        MERN STACK RECIPE APP
      </h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
