import React from "react";
import companyImg from "../../images/articleimg.png";
import {
  NavList,
  NavDiv,
  NavListItem,
  HeaderDiv,
  HeaderImg,
  HeaderTitle,
  TitleDiv,
} from "../header";

const EndUserHeader = () => {
  return (
    <HeaderDiv>
      <TitleDiv>
        <HeaderImg src={companyImg} />
        <HeaderTitle>Earnest Fintech</HeaderTitle>
      </TitleDiv>
      <NavDiv>
        <NavList>
          <NavListItem style={{ color: "#ffffff", fontSize: "20px" }}>
            Login
          </NavListItem>
          <NavListItem style={{ color: "#ffffff", fontSize: "20px" }}>
            Signin
          </NavListItem>
        </NavList>
      </NavDiv>
    </HeaderDiv>
  );
};

export default EndUserHeader;
