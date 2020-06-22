import React from "react";
import ContactUs from "../components/contactus";
import styled from "styled-components";
import { InfoBlock } from "../components/infoblock";
import { HomePageDiv, TitleDiv, PageHeaderInfo, PageHeading } from "./home";

const BidderPageDiv = HomePageDiv;
const DemandPageHeading = styled.div`
  width: 90%;
  font-size: 45px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 45px;
  @media (min-width: 900px) {
    font-size: 102px;
  }
`;
const DemandPartnerPage = () => {
  window.scrollTo(0, 0);
  return (
    <BidderPageDiv>
      <TitleDiv>
        <center>
          <DemandPageHeading>
            Manage and advance your mobile campaigns
          </DemandPageHeading>
          <PageHeaderInfo>with the BidMachine demand platform</PageHeaderInfo>
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
      <div style={{ height: "150px" }}></div>
      <InfoBlock
        headColor={"#000000"}
        infoHead={"Build direct relationships with publishers"}
        paraBackgroundColor={"#ffffff"}
        animationSide={"right"}
        paraColor={"#000000"}
        boxShadow={"-2px 2px 14px 0px rgba(15,14,15,0.8)"}
        paraContent={`Direct relationships with publishers\n
        No need to involve middlemen\n
        More affordable and relevant campaigns`}
      />
      <div style={{ height: "100px" }}></div>
      <InfoBlock
        headColor={"#000000"}
        infoHead={"Optimization and higher revenues"}
        paraBackgroundColor={"#ffffff"}
        animationSide={"left"}
        boxShadow={"-2px 2px 14px 0px rgba(15,14,15,0.8)"}
        paraColor={"#000000"}
        paraContent={`Financial transparency
        Direct partnerships
        No middlemen fees
        Unique customization`}
      />
      <center>
        <PageHeading
          style={{ marginTop: "200px", fontSize: "60px", color: "#000000" }}
        >
          Advanced Targeting
        </PageHeading>
        <PageHeaderInfo style={{ fontSize: "25px", color: "#000000" }}>
          Use the various target criteria of the Matching Engine to create
          successful campaigns that resonate with your ideal audience.
        </PageHeaderInfo>
        <div
          style={{
            background: "#000000",
            width: "50%",
            height: "400px",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "70px",
          }}
        ></div>
      </center>
      <ContactUs />
    </BidderPageDiv>
  );
};

export default DemandPartnerPage;
