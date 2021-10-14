import React from "react";
import { MDBDataTable } from "mdbreact";
import Header from "../header/header";
import { seedItems } from "../../seed/seed-Items";

const Dashboard = () => {

    const seed = () => {
        seedItems();
    }

  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 270,
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
        width: 200,
      },
      {
        label: "Brand",
        field: "brand",
        sort: "asc",
        width: 100,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 150,
      },
      {
        label: "Rating",
        field: "rating",
        sort: "asc",
        width: 100,
      },
      {
        label: "Actions",
        field: "Actions",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  };

  return (
    <div className="productList">
        <Header headerClassList={"productlist"} />
      <div className="container">
          <button className="btn btn-secondary" onClick={() => seed()}>Seed items</button>
        <MDBDataTable responsive data={data} responsive hover />
      </div>
    </div>
  );
};

export default Dashboard;
