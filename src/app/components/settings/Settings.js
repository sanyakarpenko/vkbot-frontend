import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class Settings extends Component {
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
          <div className="col-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Configurations</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="proxies">Proxies</label>
                    <textarea
                      className="form-control"
                      id="proxies"
                      rows="10"
                    ></textarea>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Proxy type</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>HTTP/HTTPS</option>
                      <option>SOCKS4</option>
                      <option>SOCKS5</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="proxies">UserAgents</label>
                    <textarea
                      className="form-control"
                      id="useragents"
                      rows="10"
                    ></textarea>
                  </Form.Group>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Timeouts</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="timeoutLike">Likes</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutLike"
                      placeholder="Timeout"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutRepost">Reposts</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutRepost"
                      placeholder="Timeout"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutGroup">Groups</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutGroup"
                      placeholder="Timeout"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutFriend">Friends</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutFriend"
                      placeholder="Timeout"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutAfterTask">After every task</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutAfterTask"
                      placeholder="Timeout"
                    />
                  </Form.Group>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
