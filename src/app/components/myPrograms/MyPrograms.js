import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Api from "../../utils/Api";
import Spinner from "../shared/Spinner";
import ItemProgram from "./ItemProgram";

class MyPrograms extends Component {
  constructor(props) {
    super(props);
    this.state = { programs: [], isLoaded: false };

    this.deleteProgram = this.deleteProgram.bind(this);
  }

  render() {
    const { isLoaded, programs } = this.state;

    if (!isLoaded) return <Spinner />;

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
                      <th>Valid accounts</th>
                      <th>Program actions</th>
                      <th>Accounts actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program) => (
                      <tr id={`program${program.id}`} key={program.id}>
                        <ItemProgram
                          program={program}
                          onDelete={this.deleteProgram}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to="/bind_program">
                  <button type="button" className="btn btn-primary mt-2">
                    Bind new program
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
    const res = await Api.getPrograms();
    this.setState({ isLoaded: true, programs: res });
  }

  deleteProgram(programId) {
    Api.deleteProgram(programId);

    this.setState({
      ...this.state,
      programs: this.state.programs.filter(
        (program) => program.id !== programId
      ),
    });
  }
}

export default withRouter(MyPrograms);
