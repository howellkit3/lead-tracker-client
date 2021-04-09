import React, { Component } from 'react'
import GoogleAuth from '../GoogleAuth';
import { connect } from 'react-redux';
import './Login.css'

export class Login extends Component {
    render() {
        return (
            <div >
                <div class="ui centered two column grid">
                    <div class="column">
                        <img src="/images/company-image.png" className="company-image" />
                    </div>
                </div>
               
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form" style={{marginTop: '15%'}}>
                                <GoogleAuth />
                            </div>
                            </div>
                            <div className="middle aligned column">
                            <div className="ui move up reveal">
                                <div className="visible content segment">
                                    <div className="ui placeholder segment" style={{ backgroundImage:"/images/company-image.png" }}>
                                        <div className="ui icon header">
                                            <i className="pink birthday cake icon"></i>
                                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden content">
                                    
                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        <i className="pink birthday cake icon"></i>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
      };
  };
  
  
  export default connect(
    mapStateToProps,
    null
  )(Login);
  
