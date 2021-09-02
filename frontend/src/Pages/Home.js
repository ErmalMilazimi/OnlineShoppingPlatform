import React from "react";
import Header from "../components/header/header";
import TopCompany from "../components/topCompany/topCompany";
import AboutUsCmp from "../components/aboutUsCmp/aboutUsCmp";
import OtherCompanies from "../components/otherCompanies/otherCompanies";
import HappyClients from "../components/happyClients/happyClients";
import HomeProduct from "../components/homeProduct/homeProduct";

function Home() {
  return (
    <>
      <Header />
      <AboutUsCmp />
      <TopCompany />
      <OtherCompanies />
      <HappyClients />
      <HomeProduct />
    </>
  );
}

export default Home;
