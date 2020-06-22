import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import ContactUs from "../components/contactus";
import { SingleTask } from "../components/singletaskinfo";
import articleimg from "../images/articleimg.png";
import { InfoBlock } from "../components/infoblock";

const HomePageDiv = styled.div`
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
const PageHeading = styled.p`
  width: 90%;
  font-size: 45px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 45px;
  @media (min-width: 600px) {
    font-size: 102px;
  }
`;
const ContactBtn = styled.div`
    padding-top: 4px;
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
        padding-top:2px;
        height: 44px;
    }
`;

const PageHeaderInfo = styled.p`
  width: 60%;
  font-size: 33px;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const TaskInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 120px;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.boxShadow};
`;

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <HomePageDiv>
      <TitleDiv>
        <center>
          <PageHeading>
            Universal Programmatic Advertising Solutions
          </PageHeading>
          <PageHeaderInfo>
            Empowering mobile app publishers and advertisers to partner and earn
            without obstacles.
          </PageHeaderInfo>
          <ContactBtn
            hoverBorder={"2px solid #ffffff"}
            hoverFontColor={"#ffffff"}
          >
            Get Started
          </ContactBtn>
          <TaskInfo style={{ marginBottom: "70px" }}>
            <SingleTask
              src={articleimg}
              headingColor={"#ffffff"}
              heading={"Control"}
              infoColor={"#ffffff"}
              info={
                "Get access to custom DSPs and optimize according to your business needs"
              }
            />
            <SingleTask
              src={articleimg}
              headingColor={"#ffffff"}
              heading={"Quality demand"}
              infoColor={"#ffffff"}
              info={"Monetize your app with premium programmatic ads"}
            />
            <SingleTask
              src={articleimg}
              headingColor={"#ffffff"}
              heading={"Quality demand"}
              infoColor={"#ffffff"}
              info={"Monetize your app with premium programmatic ads"}
            />
          </TaskInfo>
          <PageHeading
            style={{
              fontSize: "50px",
              width: "100%",
              marginTop: "90px",
              marginBottom: "0px",
            }}
          >
            Our Solutions
          </PageHeading>
          <PageHeaderInfo
            style={{
              fontSize: "30px",
              width: "100%",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Delivering the most efficient programmatic experiences
          </PageHeaderInfo>
          <TaskInfo
            backgroundColor={"#ffffff"}
            borderRadius={"10px"}
            boxShadow={"-2px 2px 14px 0px rgba(255,255,255,0.8)"}
            style={{
              width: "80%",
              marginTop: "45px",
              padding: "5%",
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <SingleTask
                src={articleimg}
                heading={"BidMachine Bidder"}
                headingColor={"#000000"}
                infoColor={"#000000"}
                info={
                  "Take advantage of in-app bidding and gather unified bidding analytics"
                }
              ></SingleTask>
              <ContactBtn hoverBorder={"2px solid red"} hoverFontColor={"red"}>
                Learn More
              </ContactBtn>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <SingleTask
                src={articleimg}
                heading={"BidMachine Bidder"}
                headingColor={"#000000"}
                infoColor={"#000000"}
                info={
                  "Take advantage of in-app bidding and gather unified bidding analytics"
                }
              ></SingleTask>
              <ContactBtn hoverBorder={"2px solid red"} hoverFontColor={"red"}>
                Learn More
              </ContactBtn>
            </div>
            <div>
              <SingleTask
                src={articleimg}
                heading={"BidMachine Bidder"}
                headingColor={"#000000"}
                infoColor={"#000000"}
                info={
                  "Take advantage of in-app bidding and gather unified bidding analytics"
                }
              ></SingleTask>
              <ContactBtn hoverBorder={"2px solid red"} hoverFontColor={"red"}>
                Learn More
              </ContactBtn>
            </div>
          </TaskInfo>
        </center>
      </TitleDiv>
      <InfoBlock
        marginTop={"60px"}
        headColor={"#000000"}
        infoHead={"Why do we make emphasis on full control and transparency?"}
        paraBackgroundColor={"#00000000"}
        animationSide={"right"}
        paraColor={"#000000"}
        paraContent={`Dealing with ambiguous fees and duplication of data can bring unnecessary business burdens. BidMachine strives for publishers to work with data directly and manage programmatic advertising in the most efficient manner. To achieve that, it is important to cut out as many middlemen as possible. 

       \n The more knowledge and control publishers have over their programmatic advertising, the more empowered and reliable the whole industry becomes.`}
      />

      <ContactBtn
        style={{ marginLeft: "10%", marginBottom: "40px" }}
        hoverBorder={"2px solid red"}
        hoverFontColor={"red"}
      >
        Learn More
      </ContactBtn>

      <ContactUs />
    </HomePageDiv>
  );
};

export {
  HomePage,
  HomePageDiv,
  PageHeading,
  TitleDiv,
  PageHeaderInfo,
  ContactBtn,
  TaskInfo,
};
