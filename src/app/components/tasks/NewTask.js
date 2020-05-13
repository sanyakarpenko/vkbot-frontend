import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

class NewTask extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create new task</h4>
                <div className="forms-sample">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Url"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="Count"
                    />
                  </Form.Group>
                  <Form.Group>
                    <select className="form-control">
                      <option>LIKE</option>
                      <option>REPOST</option>
                      <option>FRIEND</option>
                      <option>GROUPD</option>
                    </select>
                  </Form.Group>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                      />
                      <i className="input-helper"></i>
                      Run the task after creation?
                    </label>
                  </div>
                  <Link to="/tasks">
                    <button type="button" className="btn btn-danger mr-2">
                      Cancel
                    </button>
                  </Link>
                  <Link to="/tasks">
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

export default withRouter(NewTask);
