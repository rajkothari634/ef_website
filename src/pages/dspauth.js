import React from "react";
import { AuthPage } from "../components/Auth";

const DspAuth = () => {
  window.scrollTo(0, 0);
  return <AuthPage authType={"dsp"} />;
};

export default DspAuth;
