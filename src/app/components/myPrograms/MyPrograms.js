import React, { Component } from "react";

export class MyPrograms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">My programs</h4>
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Binding key</th>
                      <th>Status</th>
                      <th>Active accounts</th>
                      <th>Program actions</th>
                      <th>Accounts actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td>
                      <td>12345</td>
                      <td>
                        <label className="badge badge-success">Active</label>
                      </td>
                      <td>5 / 10</td>
                      <td>
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-primary">
                            <i className="fa fa-play"></i>
                          </button>
                          <button type="button" className="btn btn-danger">
                            <i className="fa fa-stop"></i>
                          </button>
                          <button type="button" className="btn btn-info">
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-success">
                            <i className="fa fa-plus-square"></i>
                          </button>
                          <button type="button" className="btn btn-info">
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn btn-primary mt-3">
                  Bind program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPrograms;
