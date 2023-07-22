import React from "react";
import SideContainer from "./SideContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col p-3">
      <SideContainer />

      <Outlet />
    </div>
  );
};

export default Body;
