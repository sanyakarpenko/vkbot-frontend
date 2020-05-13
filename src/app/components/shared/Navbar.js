import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

import Api from "../../utils/Api";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { api: new Api(), userInfo: {} };
  }

  render() {
    const { userInfo } = this.state;

    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
          <a
            className="navbar-brand brand-logo-mini align-self-center d-lg-none"
            href="!#"
            onClick={(evt) => evt.preventDefault()}
          >
            <img
              src={require("../../../assets/images/logo-mini.png")}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <span className="profile-text">
                    {userInfo.firstName} {userInfo.lastName}
                  </span>
                  <img
                    className="img-xs rounded-circle"
                    src={require("../../../assets/images/faces/avatar.png")}
                    alt="Profile"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    this.state.api.getUserInfo().then((response) => {
      this.setState({ userInfo: response.data });
    });
  }
}

export default Navbar;
