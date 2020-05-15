import React, { Component, Fragment } from "react";
import { ProgressBar } from "react-bootstrap";

import Api from "../../utils/Api";

class ItemTask extends Component {
  constructor(props) {
    super(props);
    this.state = { onDelete: props.onDelete, task: props.task };

    this.startTask = this.startTask.bind(this);
    this.stopTask = this.stopTask.bind(this);
  }

  render() {
    const { onDelete, task } = this.state;

    return (
      <Fragment>
        <td>
          <a href={task.url} target="_blank" rel="noopener noreferrer">
            {task.name}
          </a>
        </td>
        <td>{task.count}</td>
        <td>
          <label className="badge badge-primary">{task.taskType}</label>
        </td>
        <td>
          <label className="badge badge-primary">{task.status}</label>
        </td>
        <td>
          <ProgressBar
            variant="success"
            now={task.statsCompleted}
            max={task.count}
          />
        </td>
        <td>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.startTask}
            >
              <i className="fa fa-play"></i>
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.stopTask}
            >
              <i className="fa fa-stop"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(task.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </td>
      </Fragment>
    );
  }

  startTask() {
    Api.startTask(this.state.task.id);
    this.setState({ task: { ...this.state.task, status: "ACTIVE" } });
  }

  stopTask() {
    Api.stopTask(this.state.task.id);
    this.setState({ task: { ...this.state.task, status: "STOPPED" } });
  }
}

export default ItemTask;
