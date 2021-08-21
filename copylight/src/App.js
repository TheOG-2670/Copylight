import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./components/Pages/Landing";
import Browsing from "./components/Pages/Browsing";
import Checkout from "./components/Checkout";
import Product from "./components/Pages/Product";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";


function App() {
  return (
      <Router>
        <div>
          <nav>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/browse">
              <button>Browse</button>
            </Link>
            <Link to="/product">
              <button>Product</button>
            </Link>
            <Link to="/payment">
              <button>Payment</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>

          </nav>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/browse">
              <Browsing />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/payment">
              <Checkout />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
