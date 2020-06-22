import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import articleimg from "../images/articleimg.png";
import { SingleTask } from "../components/singletaskinfo";
import ContactUs from "../components/contactus";
import {
  HomePageDiv,
  PageHeading,
  TitleDiv,
  PageHeaderInfo,
  TaskInfo,
  ContactBtn,
} from "../pages/home";
import { InfoBlock } from "../components/infoblock";

const MarketPageDiv = HomePageDiv;

const BtnDiv = styled.div`
  width: 80%;
  margin-top: -50px;
  margin-left: 20%;
  @media (min-width: 1100px) {
    media: 35%;
    margin-left: 55%;
  }
`;

const MarketPlacePage = () => {
  window.scrollTo(0, 0);
  return (
    <MarketPageDiv>
      <TitleDiv>
        <center>
          <PageHeading>BidMachine Marketplace</PageHeading>
          <PageHeaderInfo>
            Power up your performance with in-app header bidding
          </PageHeaderInfo>
          <div
            style={{
              background: "#000000",
              width: "50%",
              height: "400px",
              marginLeft: "25%",
              marginRight: "25%",
              marginBottom: "-100px",
            }}
          ></div>
        </center>
      </TitleDiv>
      <PageHeaderInfo
        style={{
          width: "80%",
          fontSize: "60px",
          color: "#000000",
          margin: "10%",
          marginTop: "180px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Why add BidMachine as an additional monetization source?
      </PageHeaderInfo>
      <TaskInfo style={{ marginTop: "10px", marginBottom: "30px" }}>
        <SingleTask
          src={articleimg}
          headingColor={"#000000"}
          heading={"Control"}
          infoColor={"#000000"}
          info={
            "Get access to custom DSPs and optimize according to your business needs"
          }
        />
        <SingleTask
          src={articleimg}
          headingColor={"#000000"}
          heading={"Quality demand"}
          infoColor={"#000000"}
          info={"Monetize your app with premium programmatic ads"}
        />
        <SingleTask
          src={articleimg}
          headingColor={"#000000"}
          heading={"Quality demand"}
          infoColor={"#000000"}
          info={"Monetize your app with premium programmatic ads"}
        />
      </TaskInfo>
      <InfoBlock
        marginTop={"0px"}
        headColor={"#000000"}
        infoHead={"Extended analytics"}
        paraBackgroundColor={"#00000000"}
        animationSide={"left"}
        paraColor={"#000000"}
        paraContent={`The Prebid solution allows you to gather analytics from SDK bidders as well as DSPs in one spot, eliminating the need for multiple integrations.
\n
        One SDK — all major ad exchanges
        Unified analytics from all bidders\n
        Transparent auction data + raw data`}
      />
      <BtnDiv>
        <ContactBtn hoverBorder={"2px solid red"} hoverFontColor={"red"}>
          Get Started
        </ContactBtn>
      </BtnDiv>
      <InfoBlock
        marginTop={"100px"}
        headColor={"#000000"}
        infoHead={"Extended analytics"}
        paraBackgroundColor={"#00000000"}
        animationSide={"right"}
        paraColor={"#000000"}
        paraContent={`The Prebid solution allows you to gather analytics from SDK bidders as well as DSPs in one spot, eliminating the need for multiple integrations.
\n
        One SDK — all major ad exchanges
        Unified analytics from all bidders\n
        Transparent auction data + raw data`}
      />
      <div style={{ height: "90px" }} />
      <ContactUs />
    </MarketPageDiv>
  );
};

export default MarketPlacePage;
