import React from "react";
import ContactUs from "../components/contactus";
import { InfoBlock } from "../components/infoblock";
import {
  HomePageDiv,
  PageHeading,
  TitleDiv,
  PageHeaderInfo,
  ContactBtn,
} from "../pages/home";

const AdExchangeDiv = HomePageDiv;

const AdExchangePage = (props) => {
  window.scrollTo(0, 0);
  return (
    <AdExchangeDiv>
      <TitleDiv>
        <center>
          <PageHeading>BidMachine In-House Ad Exchange</PageHeading>
          <PageHeaderInfo>
            Move towards your own ad exchange with full ownership and maximum
            transparency
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
      <center>
        <ContactBtn
          style={{ marginTop: "150px" }}
          hoverBorder={"2px solid red"}
          hoverFontColor={"red"}
        >
          Get Started
        </ContactBtn>
      </center>
      <InfoBlock
        headColor={"#000000"}
        infoHead={"Why do we make emphasis on full control and transparency?"}
        paraBackgroundColor={"#00000000"}
        animationSide={"left"}
        paraColor={"#000000"}
        paraContent={`Dealing with ambiguous fees and duplication of data can bring unnecessary business burdens. BidMachine strives for publishers to work with data directly and manage programmatic advertising in the most efficient manner. To achieve that, it is important to cut out as many middlemen as possible. 

       \n The more knowledge and control publishers have over their programmatic advertising, the more empowered and reliable the whole industry becomes.`}
      />
      <div
        style={{
          width: "100%",
          backgroundColor: "#2f4c76",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <InfoBlock
          headColor={"#ffffff"}
          infoHead={"Why do we make emphasis on full control and transparency?"}
          paraBackgroundColor={"#00000000"}
          animationSide={"right"}
          paraColor={"#ffffff"}
          paraContent={`Dealing with ambiguous fees and duplication of data can bring unnecessary business burdens. BidMachine strives for publishers to work with data directly and manage programmatic advertising in the most efficient manner. To achieve that, it is important to cut out as many middlemen as possible. 

     \n The more knowledge and control publishers have over their programmatic advertising, the more empowered and reliable the whole industry becomes.`}
        />
        <ContactBtn
          style={{ marginLeft: "10%" }}
          hoverFontColor={"#ffffff"}
          hoverBorder={"2px solid #ffffff"}
        >
          Learn More
        </ContactBtn>
        <InfoBlock
          headColor={"#ffffff"}
          infoHead={"Why do we make emphasis on full control and transparency?"}
          paraBackgroundColor={"#00000000"}
          animationSide={"left"}
          paraColor={"#ffffff"}
          paraContent={`Dealing with ambiguous fees and duplication of data can bring unnecessary business burdens. BidMachine strives for publishers to work with data directly and manage programmatic advertising in the most efficient manner. To achieve that, it is important to cut out as many middlemen as possible. 

   \n The more knowledge and control publishers have over their programmatic advertising, the more empowered and reliable the whole industry becomes.`}
        />
      </div>
      <InfoBlock
        headColor={"#000000"}
        infoHead={"Why do we make emphasis on full control and transparency?"}
        paraBackgroundColor={"#00000000"}
        animationSide={"right"}
        paraColor={"#000000"}
        paraContent={`Dealing with ambiguous fees and duplication of data can bring unnecessary business burdens. BidMachine strives for publishers to work with data directly and manage programmatic advertising in the most efficient manner. To achieve that, it is important to cut out as many middlemen as possible. 

 \n The more knowledge and control publishers have over their programmatic advertising, the more empowered and reliable the whole industry becomes.`}
      />
      <ContactUs />
    </AdExchangeDiv>
  );
};

export default AdExchangePage;
