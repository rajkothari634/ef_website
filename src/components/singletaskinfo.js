import React from "react";
import styled from "styled-components";

const TaskDiv = styled.div`
  width: 300px;
  margin: 10px;
`;
const TaskImg = styled.img`
  width: 83px;
  height: 83px;
  margin-bottom: 30px;
`;
const TaskPara = styled.p`
  width: 100%;
  text-align: center;
  color: ${(props) => props.color};
  font-size: 25px;
  line-height: 40px;
`;

const SingleTask = (props) => {
  return (
    <TaskDiv>
      <center>
        <TaskImg src={props.src} />
      </center>
      <TaskPara
        color={props.headingColor}
        style={{
          fontSize: props.headingFontSize ? props.headingFontSize : "30px",
        }}
      >
        {props.heading}
      </TaskPara>
      <TaskPara
        color={props.infoColor}
        style={{
          fontSize: props.infoFontSize ? props.infoFontSize : "30px",
          marginTop: "0px",
        }}
      >
        {props.info}
      </TaskPara>
    </TaskDiv>
  );
};
export { SingleTask };
