import React, { Component } from 'react'
import GoogleAuth from '../GoogleAuth';
import history from '../../history';
import './Login.css'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    if (this.props.user) history.push('/dashboard');
    if (this.props.user === false) this.setState({ isLoading: false });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.isLoading && <div className="ui center aligned two column grid"
          style={{
            alignItems: "center",
            minHeight: '101.5vh'
          }}>

          <div className="column" style={{ padding: 80 }}>
            <img src="/images/company-image.png" className="company-image" alt="company" />
          </div>

          <div className="column">
            <GoogleAuth />
          </div>

        </div>
        }

        {this.state.isLoading && <div className="ui segment sixteen wide">
          <div className="ui active inverted dimmer centered">
            <div className="ui text loader">Loading</div>
          </div>
          <p>Loading...</p>
        </div>
        }
      </React.Fragment>

    )
  }
}

export default Login
