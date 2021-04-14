import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = ({ user, ...props }) => {
  return (
    <div style={{ backgroundColor: '#1D4592', minWidth: '100vw' }}>
      {user && <div className="ui secondary pointing menu" style={{ alignItems: 'center' }}>
        <Link to="/dashboard" className="item">
          <img src="/images/BBH_Icon.png"
            className="company-logo"
            alt="logo"
            style={{ width: '3vw', height: 'auto' }}
          />
          <span style={{ padding: 16, fontSize: '1.25vw', color: '#FFFF' }}>
            Brothers Buy Homes Tracker
          </span>
        </Link>
        <div className="right menu" style={{ fontSize: '1vw', alignItems: 'center', fontWeight: 400 }}>
          <Link to="/dashboard" className="item" style={{ color: '#FFFF' }}>
            Home
          </Link>
          <Link to="/leads" className="item" style={{ color: '#FFFF' }}>
            Leads
          </Link>
          <Link to="/agents" className="item" style={{ color: '#FFFF' }}>
            Agents
          </Link>
          <Link to="/contractors" className="item" style={{ color: '#FFFF' }}>
            Contractors
          </Link>
          <Link to="/lenders" className="item" style={{ color: '#FFFF' }}>
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
