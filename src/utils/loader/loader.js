import React from "react";
import Spinner from "../../components/Spinner/Spinner.jsx";

const loader =
  (Component, loading) =>
  ({ children, ...rest }) => {
    if (loading) {
      return <Spinner />;
    } else {
      return <Component {...rest}>{children}</Component>;
    }
  };

export default loader;
