import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '148772785072-5kta4pcdi0cqd65q3netd3dodavhplh6.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      var profile = this.auth.currentUser.get().getBasicProfile();
      this.props.signIn({ email: profile.getEmail() });
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick}
          className="ui button"
          style={{ fontSize: '1vw', borderRadius: 0, backgroundColor: '#1D4592', fontWeight: 400 }}
        >
          <span style={{ color: '#FFFF' }}>
            Sign Out
          </span>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick}
          className="ui massive button"
          style={{
            backgroundColor: '#FBC54C',
            color: '#282828',
            width: '28vw',
            borderRadius: '4vh',
            fontSize: '3vmin'
          }}>
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);