import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cat from "./Cat";
import CatForm from "./CatForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <header className="bg-primary">
            <h1 className="text-white text-center p-3">Cat card app</h1>
          </header>

          <section className="container">
            <Link to="/cat-form" className="btn btn-lg btn-danger circle add">
              <i className="fas fa-plus"></i>
            </Link>
            <Switch>
              <Route path="/cat-form">
                <CatForm />
              </Route>

              <Route path="/">
                <h2>Cat card list</h2>
                <hr />
                <div className="card-group">
                  <Cat />
                  <Cat />
                </div>
              </Route>
            </Switch>
          </section>

          <footer className="bg-light">
            <div className="container text-center">
              <i className="far fa-copyright mr-1"></i>
              <label>2018 - Lille 1</label>
              <span className="small font-italic infos">
                No cat has been hurt during the development of this app.
              </span>
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
