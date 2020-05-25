import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";
import Spinner from "../shared/Spinner";

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programId: props.match.params.id,
      accounts: [],
      selectedAccountLogs: [],
      isLoaded: false,
		};
		
		this.selectAccount = this.selectAccount.bind(this);
  }

  render() {
    const { isLoaded, accounts, selectedAccountLogs } = this.state;

    if (!isLoaded) return <Spinner />;

    return (
      <div>
        <div className="row">
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Accounts</h4>
                <Form.Group>
                  <select className="form-control" size="24" onChange={this.selectAccount}>
                    {accounts.map((account) => (
                      <option key={account} value={account}>{account}</option>
                    ))}
                  </select>
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Logs</h4>
                <Form.Group>
                  <textarea
                    className="form-control"
                    rows="30"
										readOnly
										value={selectedAccountLogs.join('\n')}
                  ></textarea>
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const res = await Api.getProgramAccounts(this.state.programId);
    this.setState({ isLoaded: true, accounts: res });
	}
	
	async selectAccount(e) {
		const res = await Api.getAccountLogs(e.target.value);
    this.setState({ ...this.state, selectedAccountLogs: res });
	}
}

export default withRouter(Logs);
