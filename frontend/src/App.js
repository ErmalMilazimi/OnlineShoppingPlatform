import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import "./main.scss";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import Items from "./Pages/ItemsPage";
import ProductPage from "./Pages/ProductDetails";

import { useDispatch } from "react-redux";
import { loadUser } from "./actions/auth";
import axios from "axios";

const Default = lazy(() => import("./Pages/Home"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(async() => {
    // console.log('rprod') 
    // const res = await axios.get('/api/user/user');
    // console.log(res.data, 'rpro232d') 
    dispatch(loadUser());
  }, []);

  return (
    <Suspense fallback={Loader()}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Default} />
            <Route exact path="/Items" component={Items} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/productItem/:id" component={ProductPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
