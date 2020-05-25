import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";

class NewProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programId: props.match.params.id,
      program: { bindingKey: "" },
    };
  }

  render() {
    const { program } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body pb-3">
                <blockquote className="text-center blockquote blockquote-success">
                  <p className="mb-0">The program was successfully saved.</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">How to get started?</h4>
                <p>
                  1) Download the version of the program you need on the buttons
                  below.
                </p>
                <Form.Group className="row">
                  <label
                    htmlFor="bindingKey"
                    className="col-sm-5 col-form-label"
                  >
                    2) Run the program and enter this key there:
                  </label>
                  <div className="col-sm-7">
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="bindingKey"
                      value={program.bindingKey}
                      readOnly
                    />
                  </div>
                </Form.Group>
                <p>
                  3) To set configuration of the program use this admin panel
                  panel.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Windows 7+</h4>
                <div className="media">
                  <a
                    type="button"
										className="btn btn-primary btn-icon-text"
										href={`${process.env.PUBLIC_URL}/files/VkBot_windows.rar`}
										target="_blank"
										rel="noopener noreferrer"
                  >
                    <i className="fa fa-windows btn-icon-prepend"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Linux</h4>
                <div className="media">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                  >
                    <i className="fa fa-linux btn-icon-prepend"></i> Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">MacOS</h4>
                <div className="media">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                  >
                    <i className="fa fa-apple btn-icon-prepend"></i> Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const res = await Api.getProgram(this.state.programId);
    this.setState({ ...this.state, program: res });
  }
}

export default withRouter(NewProgram);
