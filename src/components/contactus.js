import React from "react";
import styled from "styled-components";
import mediaimg from "../images/articleimg.png";

const QuestionDiv = styled.div`
  width: 100%;
  background-color: #294367;
  padding-top: 20px;
  padding-bottom: 80px;
`;
const Question = styled.p`
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 50px;
  cursor: pointer;
`;
const ContactBtn = styled.div`
    padding-top: 16px;
    font-size: 24px;
    width: 240px;
    height: 44px;
    text-align: center;
    padding-right: 60px:
    padding-left: 60px;
    color: #ffffff;
    background-color: #e84039;
    border-radius: 5px;
    cursor:pointer;
    &:hover{
        border: 2px solid #ffffff;
        background-color: #00000000;
        padding-top:14px;
        height: 42px;
    }
`;

const SocialImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;

const SocialAddress = styled.p`
  font-size: 22px;
  width: 80%;
  color: #000000;
  margin-top: 45px;
  line-height: 30px;
`;

const ContactUs = () => {
  return (
    <div style={{ width: "100%" }}>
      <QuestionDiv>
        <Question>Want to learn more about our solutions?</Question>
        <center>
          <ContactBtn>Contact Us</ContactBtn>
        </center>
      </QuestionDiv>
      <div
        style={{
          paddingLeft: "10%",
          paddingTop: "65px",
          paddingBottom: "60px",
        }}
      >
        <SocialImg src={mediaimg} />
        <SocialImg src={mediaimg} />
        <SocialImg src={mediaimg} />
        <SocialAddress>
          BidMachine is a part of Stack solutions. Stack is an ad tech company
          that provides monetization, UA and analytics and scales mobile
          businesses.
        </SocialAddress>
        <SocialAddress>
          575 Market St, 7th floor, San Francisco, CA 94105
        </SocialAddress>
        <SocialAddress>
          © 2020 Stack Privacy Policy CCPA Privacy Policy
        </SocialAddress>
      </div>
    </div>
  );
};

export default ContactUs;
