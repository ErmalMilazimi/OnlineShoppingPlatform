import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { MDBDataTable } from "mdbreact";
import { ToastContainer, toast } from "react-toastify";
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
    if (type === "User") {
      await axios.delete(`/api/user/${id}`);
      notify("Success", "User have been deleted!");
      setUsers(users.map((user) => user.id != id));
    } else if (type === "Product") {
      await axios.delete(`/products/${id}`);
      notify("Success", "Product have been deleted!");
      setProducts(products.map((product) => product.id != id));
    }
    setUpdate(true);
  };

  useEffect(async () => {
    if (update) {
      const resProducts = await axios.get("/products");
      const resUsers = await axios.get("/api/user");
      setProducts(resProducts.data);
      setUsers(resUsers.data);
      setUpdate(false);
    }
  }, [update]);

  const seed = () => {
    seedItems();
    setUpdate(true);
    notify("Success", "Items have been seeded!");
  };

  const notify = (type, message) => {
    console.log("click");
    switch (type) {
      case "Success":
        toast.success(message ? message : "Success!");
        break;
      case "Error":
        toast.error(message ? message : "Error!");
        break;
      default:
        toast("Null");
    }
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
        actions: (
          <div>
            <button className="btn btn-danger" onClick={() => onDelete(user.id, "User")}>
              Delete
            </button>
            <Link to={`/editUser/${user.id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </div>
        ),
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
        image: (
          <Link to={`/productItem/${product.id}`}>
            <img height="50px" src={`/Images/${product.imagePath}`} alt=""></img>
          </Link>
        ),
        name: product.name,
        description: product.description.substring(0, 100) + "...",
        category: product.category,
        brand: product.brand,
        price: product.price,
        rating: product.rating,
        actions: (
          <div>
            <button className="btn btn-danger" onClick={() => onDelete(product.id, "Product")}>
              Delete
            </button>
            <Link to={`/editProduct/${product.id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </div>
        ),
      };
    }),
  };

  return (
    <div className="productList">
      <Header headerClassList={"productlist"} />
      <div className="container">
        <div className="dashboard-buttons-container">
          <button className="btn btn-secondary dashboard-buttons-container-btn" onClick={() => seed()}>
            Seed items
          </button>
          <Link className="btn btn-secondary dashboard-buttons-container-btn" to="/AddProduct">
            Add Product
          </Link>
          <button onClick={() => notify("Error")} className="btn btn-secondary dashboard-buttons-container-btn">
            Press
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable />
        <MDBDataTable responsive data={data} hover className="dashboard-table" />
        <MDBDataTable responsive data={dataUsers} hover className="dashboard-table" />
      </div>
    </div>
  );
};

export default Dashboard;
