import React, { Component } from 'react'
import GoogleAuth from '../GoogleAuth';
import { connect } from 'react-redux';
import history from '../../history';
import './Login.css'

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            isLoading : true,
        }
    }

    componentDidMount() {
        if(this.props.user) history.push('/dashboard');
        if(this.props.user === false) this.setState({isLoading : false});
    }
    render() {
        return (
                <React.Fragment>
                {!this.state.isLoading && <div>
                     <div className="ui centered two column grid">  
                        <div className="column">
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
                                        <div className="ui placeholder segment">
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
