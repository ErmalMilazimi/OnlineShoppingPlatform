import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import Header from "../header/header";
import { seedItems } from "../../seed/seed-Items";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(async () => {
    const resProducts = await axios.get("/products");
    const resUsers = await axios.get("/api/user");
    setProducts(resProducts.data);
    setUsers(resUsers.data);
  }, []);

  const onDelete = async (id, type) => {
    if (type == "User") {
      await axios.delete(`/api/user/${id}`);
      setUsers(users.map((user) => user.id != id));
    } else if (type == "Product") {
      await axios.delete(`/products/${id}`);
      setProducts(products.map((product) => product.id != id));
    }
    setUpdate(true);
  };

  useEffect(async () => {
      if(update){
        const resProducts = await axios.get("/products");
        const resUsers = await axios.get("/api/user");
        setProducts(resProducts.data);
        setUsers(resUsers.data);
        setUpdate(false);
      }
  }, [update])

  const seed = () => {
    seedItems();
    setUpdate(true)
  };

  const dataUsers = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Role",
        field: "role",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
      },
    ],
    rows: users.map((user) => {
      return {
        name: user.name,
        role: user.role,
        email: user.email,
        actions: 
            <div>
                <button className="btn btn-danger" onClick={() => onDelete(user.id, "User")}>Delete</button>
                <Link to={`/editUser/${user.id}`}><button className="btn btn-primary">Edit</button></Link>
            </div>,
      };
    }),
  };

  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        sort: "asc",
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
      },
      {
        label: "Brand",
        field: "brand",
        sort: "asc",
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
      },
      {
        label: "Rating",
        field: "rating",
        sort: "asc",
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
      },
    ],
    rows: products.map((product) => {
      return {
        image: <img height="50px" src={`/Images/${product.imagePath}`}></img>,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        price: product.price,
        rating: product.rating,
        actions: 
            <div>
                <button className="btn btn-danger" onClick={() => onDelete(product.id, "Product")}>Delete</button>
                <Link to={`/editProduct/${product.id}`}><button className="btn btn-primary">Edit</button></Link>
            </div>,
      };
    }),
  };

  return (
    <div className="productList">
      <Header headerClassList={"productlist"} />
      <div className="container">
        <button className="btn btn-secondary" onClick={() => seed()}>
          Seed items
        </button>
        <MDBDataTable responsive data={data} responsive hover />
        <MDBDataTable responsive data={dataUsers} responsive hover />
      </div>
    </div>
  );
};

export default Dashboard;
