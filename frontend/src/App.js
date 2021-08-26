import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Product from "./components/Product";
import "./main.scss";
import Header from "../src/components/header/header";
import TopCompany from "./components/topCompany/topCompany";
// import AboutCmp from "../src/components/aboutUsCmp/aboutUsCmp";

function App() {
  return (
<<<<<<< HEAD
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/product" component={Product}/>
      </Switch>
    </div>
    </Router>
=======
    <div className="App">
      <Header />
      <TopCompany />
    </div>
>>>>>>> 18949d5 (added components)
  );
}

export default App;
