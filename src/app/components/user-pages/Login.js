import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import Api from "../../utils/Api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };

    this.signIn = this.signIn.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img
                    src={require("../../../assets/images/logo.png")}
                    alt="logo"
                  />
                </div>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      size="lg"
                      className="h-auto"
                      name="username"
                      value={username}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      size="lg"
                      className="h-auto"
                      name="password"
                      value={password}
                      onChange={this.inputHandler}
                    />
                  </Form.Group>
                  <div className="mt-3">
                    <div
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={this.signIn}
                    >
                      SIGN IN
                    </div>
                  </div>
                  {/* <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-black"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary">
                      Create
                    </Link>
                  </div>
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
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  }

  signIn() {
    Api.login(this.state.user);
  }
}

export default Login;
