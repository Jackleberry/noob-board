import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class NavigationBar extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.context.router.push('/');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-left">
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-left">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            { isAuthenticated ? userLinks : guestLinks }
          </div>

          <div className="collapse navbar-collapse">
            <Link to="/" className="navbar-brand">Noob Board</Link>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(NavigationBar);
