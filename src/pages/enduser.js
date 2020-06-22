import React from "react";
import styled from "styled-components";
import articleimg from "../images/articleimg.png";
import Header from "../components/enduser/header";
import {
  HomePageDiv,
  TitleDiv,
  PageHeaderInfo,
  ContactBtn,
  TaskInfo,
} from "./home";
import { SingleTask } from "../components/singletaskinfo";

const EndUserDiv = HomePageDiv;
const EndUserPageHeading = styled.p`
  width: 50%;
  text-align: left;
  margin-bottom: 20px;
  font-size: 34px;
  padding-left: 10%;
  color: #ffffff;
  @media (min-width: 1000px) {
    font-size: 60px;
  }
`;
const EndUserPageHeadingInfo = styled(PageHeaderInfo)`
  text-align: left;
  font-size: 20px;
  line-height: 35px;
  width: 50%;
  padding-left: 10%;
  @media (min-width: 1000px) {
    font-size: 25px;
  }
`;
const ResponsiveBtn = styled(ContactBtn)`
  margin-left: 10%;
  font-size: 18px;
  border-radius: 20px;
  height: 35px;
  &:hover {
    border: ${(props) => props.hoverBorder};
    color: ${(props) => props.hoverFontColor};
    background-color: #00000000;
    padding-top: 2px;
    height: 35px;
  }
`;

const EndUser = () => {
  window.scrollTo(0, 0);
  return (
    <EndUserDiv>
      <TitleDiv>
        <EndUserPageHeading>
          Brands want your attention. Make ’em buy it.
        </EndUserPageHeading>
        <EndUserPageHeadingInfo>
          Get rewarded for watching videos and completing online surveys from
          brands you care about. Each interaction takes just a few minutes and
          is worth up to $3. Plus unlock exclusive offers!
        </EndUserPageHeadingInfo>
        <div style={{ display: "flex", flex: "wrap", marginBottom: "150px" }}>
          <ResponsiveBtn
            hoverBorder="2px solid #ffffff"
            hoverFontColor="#ffffff"
            style={{ width: "300px" }}
          >
            SEE HOW IN 45 SECONDS
          </ResponsiveBtn>
          <ResponsiveBtn
            hoverBorder="2px solid #ffffff"
            hoverFontColor="#ffffff"
            style={{ width: "200px", marginLeft: "30px" }}
          >
            SIGN UP NOW
          </ResponsiveBtn>
        </div>
      </TitleDiv>
      <center>
        <EndUserPageHeading
          style={{
            color: "#000000",
            textAlign: "center",
            paddingLeft: "0px",
            width: "100%",
            fontSize: "40px",
            marginTop: "100px",
          }}
        >
          Earn Real Money Online from your favorite brands
        </EndUserPageHeading>
        <TaskInfo style={{ marginTop: "50px", marginBottom: "50px" }}>
          <SingleTask
            headingFontSize={"25px"}
            infoFontSize={"20px"}
            src={articleimg}
            headingColor={"#000000"}
            heading={"WATCH A VIDEO"}
            infoColor={"#000000"}
            info={
              "You’ll receive a text when it’s time to log in to watch a short video, handpicked just for you."
            }
          />
          <SingleTask
            headingFontSize={"25px"}
            infoFontSize={"20px"}
            src={articleimg}
            headingColor={"#000000"}
            heading={"WATCH A VIDEO"}
            infoColor={"#000000"}
            info={
              "You’ll receive a text when it’s time to log in to watch a short video, handpicked just for you."
            }
          />
          <SingleTask
            headingFontSize={"25px"}
            infoFontSize={"20px"}
            src={articleimg}
            headingColor={"#000000"}
            heading={"WATCH A VIDEO"}
            infoColor={"#000000"}
            info={
              "You’ll receive a text when it’s time to log in to watch a short video, handpicked just for you."
            }
          />
          <SingleTask
            headingFontSize={"25px"}
            infoFontSize={"20px"}
            src={articleimg}
            headingColor={"#000000"}
            heading={"WATCH A VIDEO"}
            infoColor={"#000000"}
            info={
              "You’ll receive a text when it’s time to log in to watch a short video, handpicked just for you."
            }
          />
        </TaskInfo>
        <EndUserPageHeadingInfo
          style={{
            textAlign: "center",
            fontSize: "35px",
            color: "#000000",
            paddingLeft: "0px",
            marginBottom: "0px",
          }}
        >
          When you reach $10, cash out.
        </EndUserPageHeadingInfo>
        <EndUserPageHeadingInfo
          style={{
            textAlign: "center",
            color: "#000000",
            marginTop: "10px",
            paddingLeft: "0px",
          }}
        >
          No catch, gimmicks or confusing point systems. It’s real cash!
        </EndUserPageHeadingInfo>
        <ResponsiveBtn
          style={{ marginLeft: "0px", marginBottom: "50px" }}
          hoverBorder="2px solid red"
          hoverFontColor="red"
        >
          SEE PAYOUT OPTIONS
        </ResponsiveBtn>
      </center>
      <TitleDiv style={{ paddingBottom: "100px" }}>
        <EndUserPageHeading style={{ fontSize: "110px" }}>
          $632,365
        </EndUserPageHeading>
        <EndUserPageHeadingInfo style={{ fontSize: "25px" }}>
          Cash & rewards paid out to people just like you in our first 12
          months!
        </EndUserPageHeadingInfo>
        <ResponsiveBtn
          hoverBorder="2px solid #ffffff"
          hoverFontColor="#ffffff"
          style={{ width: "300px" }}
        >
          CREATE AN ACCOUNT
        </ResponsiveBtn>
      </TitleDiv>
    </EndUserDiv>
  );
};

export default EndUser;
