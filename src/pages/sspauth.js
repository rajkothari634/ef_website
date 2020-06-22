import React from "react";
import { AuthPage } from "../components/Auth";

const SspAuth = () => {
  window.scrollTo(0, 0);
  return <AuthPage authType={"ssp"} />;
};

export default SspAuth;
