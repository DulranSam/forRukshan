import React from "react";
import { Outlet, Link } from "react-router-dom";

const Rukshan = () => {
  return (
    <div>
      <h1>Hello i'm Rukshan</h1>
      <Link to="/login">Click here to login</Link>
    </div>
  );
};

export default Rukshan;
