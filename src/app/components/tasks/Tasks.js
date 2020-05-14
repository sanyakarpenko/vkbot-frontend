import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Api from "../../utils/Api";
import Spinner from "../shared/Spinner";
import ItemTask from "./ItemTask";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], isLoaded: false };

    this.deleteTask = this.deleteTask.bind(this);
  }

  render() {
    const { isLoaded, tasks } = this.state;

    if (!isLoaded) return <Spinner />;

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
                    {tasks.map((task) => (
                      <tr id={`task${task.id}`} key={task.id}>
                        <ItemTask task={task} onDelete={this.deleteTask} />
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to="/new_task">
                  <button type="button" className="btn btn-primary mt-2">
                    Create new task
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const res = await Api.getTasks();
    this.setState({ isLoaded: true, tasks: res });
  }

  deleteTask(taskId) {
    Api.deleteTask(taskId);

    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  }
}

export default withRouter(Tasks);
