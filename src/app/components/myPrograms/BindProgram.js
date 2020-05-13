import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

class BindProgram extends Component {
  render() {
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
                    />
                  </Form.Group>
                  <Link to="/my_programs">
                    <button type="button" className="btn btn-danger mr-2">
                      Cancel
                    </button>
                  </Link>
                  <Link to="/new_program">
                    <button type="button" className="btn btn-success">
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BindProgram);
