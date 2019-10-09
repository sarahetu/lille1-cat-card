import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Cat = () => {
  const theme = useState("darkblue");

  function handlehover(e) {
    e.preventDefault();
    this.classNameList.toggle("hover");
    console.log("The link was clicked.");
  }

  return (
    <div className="flipper mb-3" onTouchStart={handlehover}>
      <div className="front card text-center shadow-sm">
        <img
          className="card-img-top"
          src="https://cataas.com/cat?width=250&height=200"
          alt="Cat image"
          width="250"
          height="200"
        />
        <div className="card-body">
          <h5 className="card-title">Random cat card</h5>
        </div>
      </div>
      <div className="back card text-center shadow-sm">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Random cat card</h6>
          <p className="card-text">That card shows a random cat image.</p>
        </div>
        <div className="card-footer">
          <Link to="/cat-form" className="btn btn-primary card-link">
            Edit that cat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cat;
