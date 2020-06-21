import React, { useState } from "react";
import styled from "styled-components";
import companyImg from "../images/articleimg.png";
import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";

const SimpleLink = styled(Link)`
  &:link {
    color: ${(props) => props.color};
  }
  &:visited {
    color: ${(props) => props.color};
  }
  &:hover {
    color: #fcbe46;
  }
  &:active {
    color: ${(props) => props.color};
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 60px;
  width: 100%;
  position: fixed;
  background-color: #233551;
  z-index: 1000;
`;

const TitleDiv = styled.div`
  max-height: 60px;
  flex: 90%;
  display: flex;
  max-width: 90%;
  justify-content: center;
  align-items: center;
  @media (min-width: 1300px) {
    flex: 26%;
    max-width: 26%;
    justify-content: flex-end;
    align-items: end;
  }
`;

const HeaderImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 0px;
  @media (min-width: 1300px) {
    margin-top: 10px;
  }
`;
const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-style: bold;
  margin-left: 10px;
  margin-top: 7px;
  @media (min-width: 1300px) {
    margin-top: 10px;
  }
`;

const NavDiv = styled.div`
  flex: 100%;
  width: 100%;
  display: none;
  justify-content: flex-start;
  align-items: start;
  display: none;
  @media (min-width: 1300px) {
    max-height: 60px;
    display: flex;
    flex: 73%;
    width: 73%;
    justify-content: flex-end;
    align-items: end;
    display: block;
  }
`;

const NavList = styled.ul`
  display: block;
  min-height: 60px;
  list-style-type: none;
  justify-content: flex-start;
  align-items: start;
  margin-right: 0;

  @media (min-width: 1300px) {
    justify-content: flex-end;
    display: flex;
    align-items: end;
    margin-top: 0px;
    margin-right: 10%;
  }
`;

const NavListItem = styled.li`
  font-size: 17px;
  margin-left: 12px;
  margin-right: 12px;
  padding: 3px;
  margin-top: 15px;
  color: ${(props) => props.color};
  cursor: pointer;
  max-width: ${(props) => props.maxwidth};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bgColor};
  &:hover {
    color: #fcbe46;
  }
`;

const DropDownDiv = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const NavListItemDrop = styled.li`
  display: inline-block;
  font-size: 17px;
  cursor: pointer;
  color: ${(props) => props.color};
  margin-left: 12px;
  margin-right: 12px;
  padding: 5px;
  margin-top: 13px;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bgColor};
  &:hover ${DropDownDiv} {
    display: block;
  }
`;

const DropDownItem = styled.p`
  padding-left: 10px;
  color: #000000;
  &:hover {
    color: #fcbe46;
  }
`;
const NavOpener = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 1%;
  background-color: green;
  display: block;
  cursor: pointer;
  @media (min-width: 1300px) {
    display: none;
  }
`;
const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  const isDesktop = useMediaPredicate("(min-width: 1300px)");
  return (
    <HeaderDiv>
      <NavOpener onClick={() => setIsNavBar(!isNavBar)} />
      <TitleDiv>
        <HeaderImg src={companyImg} />
        <HeaderTitle>
          <SimpleLink
            color={"#ffffff"}
            to="/home"
            style={{ textDecoration: "none" }}
          >
            Earnest Fintech
          </SimpleLink>
        </HeaderTitle>
      </TitleDiv>
      <NavDiv
        style={{
          display: isNavBar || isDesktop ? "block" : "none",
        }}
      >
        <NavList>
          <NavListItemDrop color={"#ffffff"}>
            <span>Publishers</span>
            <DropDownDiv>
              <DropDownItem>
                <SimpleLink
                  color={"#000000"}
                  to="/marketplace"
                  style={{ textDecoration: "none" }}
                >
                  MarketPlace
                </SimpleLink>
              </DropDownItem>
              <DropDownItem>
                <SimpleLink
                  color={"#000000"}
                  to="/bidder"
                  style={{ textDecoration: "none" }}
                >
                  Bidder
                </SimpleLink>
              </DropDownItem>
              <DropDownItem>
                <SimpleLink
                  color={"#000000"}
                  to="/adexchange"
                  style={{ textDecoration: "none" }}
                >
                  In-House Ad Exchange
                </SimpleLink>
              </DropDownItem>
            </DropDownDiv>
          </NavListItemDrop>
          <NavListItem color={"#ffffff"}>
            <SimpleLink
              color={"#ffffff"}
              to="/demandpartner"
              style={{ textDecoration: "none" }}
            >
              Demand Partners
            </SimpleLink>
          </NavListItem>
          <NavListItem color={"#ffffff"}>
            <SimpleLink
              color={"#ffffff"}
              to="/enduser"
              style={{ textDecoration: "none" }}
            >
              End User
            </SimpleLink>
          </NavListItem>
          <NavListItem color={"#ffffff"}>About</NavListItem>
          <NavListItem color={"#ffffff"}>Blog</NavListItem>
          <NavListItemDrop color={"#ffffff"}>
            <span>Log In / Sign In</span>
            <DropDownDiv>
              <DropDownItem>
                <SimpleLink
                  color={"#000000"}
                  to="/auth/dsp"
                  style={{ textDecoration: "none" }}
                >
                  DSP
                </SimpleLink>
              </DropDownItem>
              <DropDownItem>
                <SimpleLink
                  color={"#000000"}
                  to="/auth/ssp"
                  style={{ textDecoration: "none" }}
                >
                  SSP
                </SimpleLink>
              </DropDownItem>
            </DropDownDiv>
          </NavListItemDrop>
          <NavListItem
            color={"#ffffff"}
            bgColor={"#e84039"}
            borderRadius={"6px"}
            style={{
              width: "115px",
              padding: "8px",
              paddingLeft: "16px",
              paddingRight: "16px",
              marginTop: "11px",
            }}
          >
            Dashboard
          </NavListItem>
        </NavList>
      </NavDiv>
    </HeaderDiv>
  );
};

export {
  Header,
  HeaderDiv,
  HeaderImg,
  HeaderTitle,
  NavDiv,
  NavList,
  NavListItem,
  TitleDiv,
};
