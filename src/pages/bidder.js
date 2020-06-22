import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import ContactUs from "../components/contactus";
import { InfoBlock } from "../components/infoblock";

import {
  HomePageDiv,
  PageHeading,
  TitleDiv,
  PageHeaderInfo,
  ContactBtn,
} from "../pages/home";

const BidderPageDiv = HomePageDiv;
// const TitleDiv = styled.div`
//   width: 100%;
//   background-color: #211551;
//   padding-top: 150px;
// `;
// const PageHeaderInfo = styled.p`
//   width: 60%;
//   font-size: 40px;
//   color: #ffffff;
//   text-align: center;
//   line-height: 60px;
//   margin-top: 20px;
//   margin-bottom: 60px;
// `;
// const PageHeading = styled.p`
//   width: 90%;
//   font-size: 50px;
//   color: #ffffff;
//   text-align: center;
//   margin-bottom: 45px;
//   @media (min-width: 600px) {
//     font-size: 102px;
//   }
// `;

const BidderPage = () => {
  window.scrollTo(0, 0);
  return (
    <BidderPageDiv>
      <TitleDiv>
        <center>
          <PageHeading>BidMachine Bidder</PageHeading>
          <PageHeaderInfo>
            Take advantage of innovative in-app bidding technology with Prebid
            at the forefront. This solution comes free with all of our
            programmatic offerings.
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
      <InfoBlock
        marginTop={"150px"}
        headColor={"#000000"}
        infoHead={"What is Prebid Mobile?"}
        paraBackgroundColor={"#00000000"}
        animationSide={"right"}
        paraColor={"#000000"}
        paraContent={`Prebid sends one request to the server where multiple demand sources are simultaneously asked for bids. Bids return from demand partners and the highest bid wins in less than a second. Prebid can connect you to ad exchanges of your choice as well as traditional set of DSPs.`}
      />
      <InfoBlock
        marginTop={"100px"}
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
      <div style={{ height: "70px" }}></div>
      <ContactUs />
    </BidderPageDiv>
  );
};

export default BidderPage;
