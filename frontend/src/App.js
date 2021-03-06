import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import "./main.scss";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import Items from "./Pages/ItemsPage";
import ProductPage from "./Pages/ProductDetails";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import ContactUs from "./components/contactUs/contactUs";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/auth";
import AboutUs from "./Pages/AboutUs";
import ProtectedRoute from "./protected-route/ProtectedRoute";
import Dashboard from "./components/dashboard/dashboard";
import EditProductComponent from "./components/editProduct/EditProductComponent";


const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Suspense fallback={Loader()}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Items/:filter?" component={Items} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/productItem/:id" component={ProductPage} />
            <ProtectedRoute exact path="/editProduct/:id" component={EditProductComponent} user={user}/>
            <ProtectedRoute exact path="/AddProduct" component={AddProduct} user={user}/>
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} user={user} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
