import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <div>OOPS...{error.message}</div>;
};

export default Error;
