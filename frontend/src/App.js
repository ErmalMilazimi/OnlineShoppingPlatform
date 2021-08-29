import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import "./main.scss";
import HomePage from "../src/Pages/Home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={Product} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
