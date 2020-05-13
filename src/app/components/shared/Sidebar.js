import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends Component {
  state = {};

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="/"><img src={require("../../../assets/images/logo.png")} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../../assets/images/logo-mini.png" )} alt="logo" /></a>
        </div>
        <ul className="nav">
				<li className={ this.isPathActive('/settings') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/settings">
              <i className="fa fa-cog menu-icon"></i>
              <span className="menu-title">Settings</span>
            </Link>
          </li>
					<li className={ this.isPathActive('/my_programs') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/my_programs">
              <i className="fa fa-laptop menu-icon"></i>
              <span className="menu-title">My programs</span>
            </Link>
          </li>
					<li className={ this.isPathActive('/tasks') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/tasks">
              <i className="fa fa-tasks menu-icon"></i>
              <span className="menu-title">Tasks</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);