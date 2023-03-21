import React from "react";
import { Outlet } from "react-router-dom";

export default function MainHeader() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
