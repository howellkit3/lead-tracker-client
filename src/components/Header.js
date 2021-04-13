import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = ({user, ...props}) => {
    return (
        <div>
            {user && <div className="ui secondary pointing menu" >
                    <Link to="/dashboard" className="item">
                        Lead Tracker
                    </Link>
                    <div className="right menu">
                        <Link to="/leads" className="item">
                            Leads
                        </Link>
                        <Link to="/agents" className="item">
                            Agents
                        </Link>
                        <Link to="/contractors" className="item">
                            Contractors
                        </Link>
                        <Link to="/lenders" className="item">
                            Lenders
                        </Link>

                        <GoogleAuth /> 
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;
