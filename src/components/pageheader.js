import React from "react";
import styled from "styled-components";
import SingleTask from "./singletaskinfo";
import articleimg from "../images/articleimg.png";
import InfoBlock from "./infoblock";

const PageHeader = (props) => {
  return (
    <InfoBlock
      paraBackgroundColor={"#00000000"}
      paraColor={"#000000"}
      paraContent={
        "Dealing with ambiguous fees and duplication of data can bring unnecessary business burdens. BidMachine strives for publishers to work with data directly and manage programmatic advertising in the most efficient manner. To achieve that, it is important to cut out as many middlemen as possible. The more knowledge and control publishers have over their programmatic advertising, the more empowered and reliable the whole industry becomes."
      }
      infoHead={"Why do we make emphasis on full control and transparency?"}
      animationSide={"left"}
      headColor={"#ffffff"}
      // boxShadow={"-2px 2px 14px 0px rgba(0,0,0,0.8)"}
    />
  );
};

export default PageHeader;
