import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CounterPage } from "./CounterPage";
import { GamePage } from "./GamePage";
import { NotFoundPage } from "./NotFoundPage.js";
import { GamePage } from "./GamePage.js";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="app-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter">
              <CounterPage />
            </Route>
            <Route path="/game">
              <GamePage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
