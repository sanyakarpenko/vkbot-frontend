import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";
import history from "../../constants/history";

class BindProgram extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.addProgram = this.addProgram.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bind new program</h4>
                <div className="forms-sample">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Program name"
                      name="name"
                      value={name}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Link to="/my_programs">
                    <button type="button" className="btn btn-danger mr-2">
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.addProgram}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  inputHandler(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  async addProgram() {
    const res = await Api.addProgram({ name: this.state.name });
    history.push(`/new_program/${res.id}`);
  }
}

export default withRouter(BindProgram);
