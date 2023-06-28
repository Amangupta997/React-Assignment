import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1> OOPS! Page Not Found </h1>
      <Link to="/">Go To Homepage</Link>
    </>
  );
};

export default Error;
