import React, { useState } from "react";
import styled from "styled-components";
import { RegistrationForm } from "./registerform";
import { LoginForm } from "./loginform";
import articleimg from "../images/articleimg.png";

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    height: 100%;
  }
`;

const FormDiv = styled.div`
  width: 100%;
  min-width: 300px;
  @media (min-width: 1000px) {
    height: 720px;
    flex-shrink: 0;
    width: 40%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const TypeDiv = styled.div`
  width: 100%;
  height: 400px;
  background-color: #243857;
  @media (min-width: 1000px) {
    height: 720px;
    width: 60%;
  }
`;

const DeciderDiv = styled.div`
  border: 1px solid #243857;
  margin-top: 60px;
  width: 80%;
  margin-left: 10%;
  height: 30px;
  border-radius: 6px;
  display: flex;
`;

const RegistrationDiv = styled.div`
  width: 50%;
  padding-top: 4px;
  height: 28px;
  cursor: pointer;
  font-size: 14px;
`;
const LoginDiv = styled.div`
  width: 50%;
  padding-top: 4px;
  height: 28px;
  cursor: pointer;
  font-size: 14px;
`;

const header = styled.p`
  position: relative;
  color: #ffffff;
  text-align: center;
  @media (min-width: 1000px) {
    text-align: left;
  }
`;

const AuthPage = (props) => {
  const [formType, setFormType] = useState("login");
  const [server, setServer] = useState("adserver");

  return (
    <MainDiv>
      <TypeDiv>
        <img
          alt="earnest fintech"
          src={articleimg}
          style={{
            width: "60px",
            height: "60px",
            marginTop: "100px",
            marginLeft: "100px",
          }}
        />
        <header
          style={{
            fontSize: "35px",
            color: "#ffffff",
            marginLeft: "170px",
            marginTop: "-50px",
          }}
        >
          Earnest Fintech
        </header>
        <header
          style={{
            width: "80%",
            fontSize: "60px",
            color: "#ffffff",
            marginLeft: "100px",
            marginTop: "40px",
          }}
        >
          {props.authType === "dsp" ? "Demand Side" : "Supply Side"}
        </header>
        <header
          style={{
            fontSize: "30px",
            color: "#ffffff",
            marginLeft: "100px",
            marginTop: "-10px",
          }}
        >
          Platform
        </header>
      </TypeDiv>
      <FormDiv>
        <DeciderDiv
          style={{ display: props.authType === "ssp" ? "flex" : "none" }}
        >
          <RegistrationDiv
            style={{
              backgroundColor: server === "adserver" ? "#243857" : "#ffffff",
              color: server === "adserver" ? "#ffffff" : "#243857",
            }}
            onClick={() => setServer("adserver")}
          >
            <center>Ad Server</center>
          </RegistrationDiv>
          <LoginDiv
            style={{
              backgroundColor: server === "adserver2" ? "#243857" : "#ffffff",
              color: server === "adserver2" ? "#ffffff" : "#243857",
            }}
            onClick={() => setServer("adserver2")}
          >
            <center>Ad Server 2</center>
          </LoginDiv>
        </DeciderDiv>
        <DeciderDiv>
          <RegistrationDiv
            style={{
              backgroundColor: formType === "signin" ? "#243857" : "#ffffff",
              color: formType === "signin" ? "#ffffff" : "#243857",
            }}
            onClick={() => setFormType("signin")}
          >
            <center>Registration</center>
          </RegistrationDiv>
          <LoginDiv
            style={{
              backgroundColor: formType === "login" ? "#243857" : "#ffffff",
              color: formType === "login" ? "#ffffff" : "#243857",
            }}
            onClick={() => setFormType("login")}
          >
            <center>Login</center>
          </LoginDiv>
        </DeciderDiv>
        <div style={{ marginTop: "40px", marginLeft: "10%", width: "80%" }}>
          <RegistrationForm display={formType} />
          <LoginForm display={formType} />
        </div>
      </FormDiv>
    </MainDiv>
  );
};

export { AuthPage };
