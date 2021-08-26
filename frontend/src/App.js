import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Product from "./components/Product";
import "./main.scss";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/product" component={Product}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
