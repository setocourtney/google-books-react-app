import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Container>
          <Switch>
          <Route exact path = '/' component={Search} />
          <Route exact path = '/search' component={Search} />
          <Route exact path = '/saved' component={Saved} />
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
