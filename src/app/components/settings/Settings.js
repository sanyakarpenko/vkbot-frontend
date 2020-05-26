import React, { Component } from "react";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";
import Spinner from "../shared/Spinner";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { timerSettings: null, settings: { isLoaded: false } };

    this.inputHandler = this.inputHandler.bind(this);
  }

  render() {
    const {
      isLoaded,
      proxies,
      useragents,
      proxyType,
      rucaptchaKey,
      timeoutAfterTask,
      timeoutLike,
      timeoutFriend,
      timeoutRepost,
      timeoutGroup,
    } = this.state.settings;

    if (!isLoaded) return <Spinner />;

    return (
      <div>
        <div className="row">
          <div className="col-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Configurations</h4>
                <div className="forms-sample">
                  <Form.Group>
                    <label htmlFor="proxies">Proxies</label>
                    <textarea
                      className="form-control"
                      id="proxies"
                      name="proxies"
                      rows="10"
                      value={proxies}
                      onChange={this.inputHandler}
                    ></textarea>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="proxyType">Proxy type</label>
                    <select
                      className="form-control"
                      id="proxyType"
                      name="proxyType"
                      value={proxyType}
                      onChange={this.inputHandler}
                    >
                      <option value="HTTP">HTTP/HTTPS</option>
                      <option value="SOCKS4">SOCKS4</option>
                      <option value="SOCKS5">SOCKS5</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="proxies">UserAgents</label>
                    <textarea
                      className="form-control"
                      id="useragents"
                      name="useragents"
                      rows="10"
                      value={useragents}
                      onChange={this.inputHandler}
                    ></textarea>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="rucaptchaKey">Rucaptcha</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="rucaptchaKey"
                      name="rucaptchaKey"
                      placeholder="Key"
                      value={rucaptchaKey}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Timeouts</h4>
                <div className="forms-sample">
                  <Form.Group>
                    <label htmlFor="timeoutLike">Likes</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutLike"
                      name="timeoutLike"
                      placeholder="Timeout"
                      value={timeoutLike}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutRepost">Reposts</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutRepost"
                      name="timeoutRepost"
                      placeholder="Timeout"
                      value={timeoutRepost}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutGroup">Groups</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutGroup"
                      name="timeoutGroup"
                      placeholder="Timeout"
                      value={timeoutGroup}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutFriend">Friends</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutFriend"
                      name="timeoutFriend"
                      placeholder="Timeout"
                      value={timeoutFriend}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="timeoutAfterTask">After every task</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="timeoutAfterTask"
                      name="timeoutAfterTask"
                      placeholder="Timeout"
                      value={timeoutAfterTask}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const res = await Api.getSettings();
    this.setState({ settings: { isLoaded: true, ...res } });
  }

  inputHandler(event) {
    this.setState({
      settings: {
        ...this.state.settings,
        [event.target.name]: event.target.value,
      },
    });

    this.saveSettings();
  }

  saveSettings() {
    clearTimeout(this.state.timerSettings);
    const timer = setTimeout(() => Api.saveSettings(this.state.settings), 1000);
    this.setState({ timerSettings: timer });
  }
}

export default Settings;
