import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from './Components/Header';
import Guide from './Pages/Guide';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <Container fluid className="App p-0">
      <Header />
      <Switch>
      <Route exact path="/guide">
        <Guide />
      </Route>
      <Route path={["/home", "/"]}>
        <Home />
      </Route>
    </Switch>
    </Container>
    </Router>
  );
}

export default App;
