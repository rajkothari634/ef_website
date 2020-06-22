import React from "react";
import "./App.css";
import { HomePage } from "./pages/home";
import BidderPage from "./pages/bidder";
import DemandPartnerPage from "./pages/demandpartner";
import EndUserPage from "./pages/enduser";
import MarketPlacePage from "./pages/marketplace";
import AdExchangePage from "./pages/adexchange";
import DspAuth from "./pages/dspauth";
import SspAuth from "./pages/sspauth";
import { Header } from "./components/header";
import styled from "styled-components";
import { Route } from "react-router-dom";

const MainDiv = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: column;
  max-width: 100%;
`;

const App = () => {
  return (
    <MainDiv>
      <Header />
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/auth/dsp" component={DspAuth}></Route>
      <Route path="/auth/ssp" component={SspAuth}></Route>
      <Route path="/enduser" component={EndUserPage}></Route>
      <Route path="/demandpartner" component={DemandPartnerPage}></Route>
      <Route path="/marketplace" component={MarketPlacePage}></Route>
      <Route path="/bidder" component={BidderPage}></Route>
      <Route path="/adexchange" component={AdExchangePage}></Route>
    </MainDiv>
  );
};

export default App;
