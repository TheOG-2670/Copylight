import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Browsing from "./components/Browsing";


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

          </nav>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/browse">
              <Browsing />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
