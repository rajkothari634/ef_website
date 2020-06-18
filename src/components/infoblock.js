import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding-top: 40px;
  width: 100%;
  margin-top: ${(props) => props.marginTop};
`;
const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
//para div width is 30% before and margin left 10% before for @media a
const ParaDiv = styled.div`
  width: 80%;
  border-radius: 8px;
  font-size: 25px;
  margin-left: 5%;
  margin-bottom: 60px;
  margin-right: 5%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  line-height: 40px;
  padding: 20px;
  padding: ${(props) =>
    props.backgroundColor === "#00000000" ? "20px" : "5%"};
  box-shadow: ${(props) => props.boxShadow};
  @media (min-width: 1100px) {
    width: 35%;
    margin-left: 7%;
    padding: ${(props) =>
      props.backgroundColor === "#00000000" ? "20px" : "5%"};
  }
`;

//color background elevation side

const AnimationDiv = styled.div`
  width: 100%;
  min-width: 400px;
  height: 450px;
  background-color: #000000;
  @media (min-width: 1100px) {
    width: 45%;
  }
`;

const InfoHead = styled.p`
  width: 80%;
  text-align: center;
  font-size: 60px;
  color: ${(props) => props.color};
`;

const InfoBlock = (props) => {
  if (props.animationSide === "right") {
    return (
      <MainDiv className={"infoblock"} marginTop={props.marginTop}>
        <center>
          <InfoHead color={props.headColor}>{props.infoHead}</InfoHead>
        </center>
        <InfoDiv>
          <ParaDiv
            color={props.paraColor}
            backgroundColor={props.paraBackgroundColor}
            boxShadow={props.boxShadow}
          >
            {props.paraContent}
          </ParaDiv>
          <AnimationDiv></AnimationDiv>
        </InfoDiv>
      </MainDiv>
    );
  }
  return (
    <MainDiv marginTop={props.marginTop}>
      <center>
        <InfoHead color={props.headColor}>{props.infoHead}</InfoHead>
      </center>
      <InfoDiv>
        <AnimationDiv></AnimationDiv>
        <ParaDiv
          color={props.paraColor}
          backgroundColor={props.paraBackgroundColor}
          boxShadow={props.boxShadow}
        >
          {props.paraContent}
        </ParaDiv>
      </InfoDiv>
    </MainDiv>
  );
};

export { InfoBlock };
