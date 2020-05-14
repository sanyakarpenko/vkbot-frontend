import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Program logs</h4>
                <Form.Group>
                  <textarea
                    className="form-control"
                    rows="30"
                    readOnly
                  ></textarea>
                </Form.Group>
                <Link to="/my_programs">
                  <button type="button" className="btn btn-primary mt-2">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {}
}

export default withRouter(Logs);
