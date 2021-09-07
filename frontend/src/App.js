import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import "./main.scss";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import Items from "./Pages/ItemsPage";

const Default = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <Suspense fallback={Loader()}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Default} />
            <Route exact path="/Items" component={Items} />
            <Route exact path="/product" component={Product} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
