import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Dropdown } from "react-bootstrap";

import Api from "../../utils/Api";
import history from "../../constants/history";

class ItemProgram extends Component {
  constructor(props) {
    super(props);
    this.state = { onDelete: props.onDelete, program: props.program };

    this.startProgram = this.startProgram.bind(this);
    this.stopProgram = this.stopProgram.bind(this);
    this.programLogs = this.programLogs.bind(this);
    this.addAccounts = this.addAccounts.bind(this);
  }

  render() {
    const { onDelete, program } = this.state;

    return (
      <Fragment>
        <td>
          <Link to={`/new_program/${program.id}`}>{program.name}</Link>
        </td>
        <td>
          <Form.Control
            type="text"
            className="form-control"
            value={program.bindingKey}
            style={{ height: "23px" }}
            readOnly
          />
        </td>
        <td>
          <label className="badge badge-primary">{program.status}</label>
        </td>
        <td>
          {program.validAccounts} / {program.accountCount}
        </td>
        <td>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.startProgram}
            >
              <i className="fa fa-play"></i>
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.stopProgram}
            >
              <i className="fa fa-stop"></i>
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={this.programLogs}
            >
              <i className="fa fa-file-text"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(program.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </td>
        <td>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addAccounts}
            >
              <i className="fa fa-plus-square"></i>
            </button>
            <Dropdown>
              <Dropdown.Toggle variant="btn btn-danger">
                <i className="fa fa-trash"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Remove all accounts</Dropdown.Item>
                <Dropdown.Item>Remove accounts with an error</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </Fragment>
    );
  }

  programLogs() {
    history.push("/program/1/logs");
  }

  addAccounts() {
    history.push(`/program/${this.state.program.id}/add_accounts`);
  }

  startProgram() {
    Api.startProgram(this.state.program.id);
    this.setState({ program: { ...this.state.program, status: "ACTIVE" } });
  }

  stopProgram() {
    Api.stopProgram(this.state.program.id);
    this.setState({ program: { ...this.state.program, status: "STOPPED" } });
  }
}

export default withRouter(ItemProgram);
