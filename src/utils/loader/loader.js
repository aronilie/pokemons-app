import React from "react";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Alert from "../../components/Alert/Alert.jsx";

const loader =
  (Component, loading, error) =>
  ({ children, ...rest }) => {
    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <Alert severity="error">{error}</Alert>;
    } else {
      return <Component {...rest}>{children}</Component>;
    }
  };

export default loader;
