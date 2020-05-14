import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";
import history from "../../constants/history";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        name: "",
        url: "",
        count: 0,
        taskType: "LIKE",
        runTaskAfterCreation: true,
      },
    };

    this.createTask = this.createTask.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  render() {
    const {
      name,
      url,
      count,
      taskType,
      runTaskAfterCreation,
    } = this.state.task;

    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create new task</h4>
                <Form className="forms-sample">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Url"
                      name="url"
                      value={url}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="Count"
                      name="count"
                      value={count}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <select
                      className="form-control"
                      name="taskType"
                      value={taskType}
                      onChange={this.inputHandler}
                    >
                      <option value="LIKE">LIKE</option>
                      <option value="REPOST">REPOST</option>
                      <option value="FRIEND">FRIEND</option>
                      <option value="GROUP">GROUPD</option>
                    </select>
                  </Form.Group>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
												name="runTaskAfterCreation"
												defaultChecked
                        value={runTaskAfterCreation}
                        onChange={this.inputHandler}
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
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.createTask}
                  >
                    Save
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  inputHandler(event) {
    this.setState({
      task: {
        ...this.state.task,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    });
  }

  createTask() {
    Api.createTask(this.state.task);
    history.push("/tasks");
  }
}

export default withRouter(NewTask);
