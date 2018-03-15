import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  rightNavItems = () => {
    const { dispatch, user, location, history } = this.props;
    if (user.id) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    } else {
      return (
      <Menu.Menu position="right">
        { ['login', 'register'].map( item =>
            <Link key={item} to={`/${item}`}>
              <Menu.Item
                id={item}
                name={item}
                active={location.pathname === `/${item}`}
              />
            </Link>
          )
        }
      </Menu.Menu>
      )}
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              id="home"
              active={this.props.location.pathname === "/"}
            />
            </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar))