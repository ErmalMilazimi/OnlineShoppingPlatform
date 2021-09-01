import React from "react";
import Header from "../components/header/header";
import TopCompany from "../components/topCompany/topCompany";
import AboutUsCmp from "../components/aboutUsCmp/aboutUsCmp";
import OtherCompanies from "../components/otherCompanies/otherCompanies";
import HappyClients from "../components/happyClients/happyClients";

function Home() {
  return (
    <>
      <Header />
      <AboutUsCmp />
      <TopCompany />
      <OtherCompanies />
      <HappyClients />
    </>
  );
}

export default Home;
