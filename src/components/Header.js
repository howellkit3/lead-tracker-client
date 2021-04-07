import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" >
            <Link to="/dashboard" className="item">
                Lead Tracker
            </Link>
            <div className="right menu">
                <Link to="/leads" className="item">
                    All Leads
                </Link>
                <GoogleAuth /> 
            </div>
        </div>
    )
}

export default Header;