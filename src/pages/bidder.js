import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import ContactUs from "../components/contactus";

const BidderPageDiv = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: column;
  max-width: 100%;
`;
const TitleDiv = styled.div`
  width: 100%;
  background-color: #211551;
  padding-top: 150px;
`;
const PageHeaderInfo = styled.p`
  width: 60%;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  margin-top: 20px;
  margin-bottom: 60px;
`;
const PageHeading = styled.p`
  width: 90%;
  font-size: 50px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 45px;
  @media (min-width: 600px) {
    font-size: 102px;
  }
`;
const ContactBtn = styled.div`
    padding-top: 16px;
    font-size: 24px;
    width: 240px;
    text-align: center;
    height: 44px;
    padding-right: 60px:
    padding-left: 60px;
    color: #ffffff;
    background-color: #e84039;
    border-radius: 5px;
    cursor:pointer;
    &:hover{
        border: ${(props) => props.hoverBorder};
        color: ${(props) => props.hoverFontColor};
        background-color: #00000000;
        padding-top:14px;
        height: 42px;
    }
`;

const BidderPage = () => {
  return (
    <BidderPageDiv>
      <Header />
      <TitleDiv>
        <center>
          <PageHeading>BidMachine Bidder</PageHeading>
          <PageHeaderInfo>
            Empowering mobile app publishers and advertisers to partner and earn
            without obstacles.
          </PageHeaderInfo>
        </center>
      </TitleDiv>
      <ContactUs />
    </BidderPageDiv>
  );
};
