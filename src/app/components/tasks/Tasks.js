import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

export class Tasks extends Component {
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
                <h4 className="card-title">Tasks</h4>
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Url</th>
                      <th>Count</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Progress</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>vk.com/durov</td>
                      <td>10</td>
                      <td>
                        <label className="badge badge-warning">FRIEND</label>
                      </td>
                      <td>
                        <label className="badge badge-success">ACTIVE</label>
                      </td>
                      <td>
                        <ProgressBar variant="success" now={50} />
                      </td>
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
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn btn-primary mt-3">
                  Create new task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
