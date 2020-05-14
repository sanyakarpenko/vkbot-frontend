import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";
import history from "../../constants/history";

class AddAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = { programId: props.match.params.id, tokens: "" };

    this.addAccounts = this.addAccounts.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  render() {
    const { tokens } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Account tokens</h4>
                <Form.Group>
                  <textarea
                    className="form-control"
                    rows="30"
                    name="tokens"
                    value={tokens}
                    onChange={this.inputHandler}
                  ></textarea>
                </Form.Group>
                <Link to="/my_programs">
                  <button type="button" className="btn btn-primary mr-2">
                    Back
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.addAccounts}
                >
                  Add
                </button>
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

  addAccounts() {
    Api.addAccounts({
      programId: this.state.programId,
      tokens: this.state.tokens.split("\n"),
    });

    history.push("/my_programs");
  }
}

export default withRouter(AddAccounts);
