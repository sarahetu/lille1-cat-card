import React, { useState } from "react";
import { createCard } from "./data-service";

class CatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  newCardCreated() {
    const newCard = {
      id: 1,
      cardTitle: this.id.value,
      cardImage: this.id.value,
      cardDescription: this.id.value
    };

    return createCard(newCard);
  }

  render() {
    return (
      <div>
        <h2>Cat card form</h2>
        <hr />
        <form noValidate className="was-validated" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="cardTitle" className="col-sm-2 col-form-label">
              Card title
            </label>
            <input
              type="text"
              required
              className="form-control col-sm-10"
              id="cardTitle"
              placeholder="Card title"
            />
            <div className="invalid-feedback offset-md-2 col-sm-10">
              That field is required. Please provide a value.
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="cardImage" className="col-sm-2 col-form-label">
              Card image URL
            </label>
            <input
              type="url"
              required
              className="form-control col-sm-10"
              id="cardImage"
              placeholder="Card image URL"
            />
            <div className="invalid-feedback offset-md-2 col-sm-10">
              That field is required and attempt an URL as value. Please provide
              a value that respect URL format.
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="cardDescription"
              className="col-sm-2 col-form-label"
            >
              Card description
            </label>
            <textarea
              className="form-control col-sm-10"
              id="cardDescription"
            ></textarea>
          </div>
          <button className="btn btn-danger">Delete</button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick="createCard(card)"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CatForm;
