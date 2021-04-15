import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAgents } from '../../actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AgentList extends React.Component {
  componentDidMount() {
    this.props.fetchAgents();
  }

  renderAdmin(agent) {
    return (
      <div className="right floated content">
        <Link to={`/agents/edit/${agent.id}`} className="ui button primary">Edit</Link>
        <Link to={`/agents/delete/${agent.id}`} className="ui button negative">Delete</Link>
      </div>
    );
  }

  renderList() {
    return this.props.agents.map(agent => {
      if (agent.id) {
        return (
          <tr key={agent.id}>
            <td>{agent.first_name} {agent.middle_name}, {agent.last_name}</td>
            <td>{agent.email} </td>
            <td>{this.renderAdmin(agent)}</td>
          </tr>
        );
      }
      return null;
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/agents/new" className="ui button primary">
            Add an Agent
            </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui stackable four column grid" style={{ margin: 0, marginLeft: '75px', marginRight: '75px', paddingTop: 24 }}>
        <div className="two wide column">
          <h2>Agents</h2>
        </div>
        <div className="fourteen wide column right aligned">
          {this.renderCreate()}
        </div>
        <div className="sixteen wide column">
          <table className="ui left aligned striped celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
        <ToastContainer autoClose={2000} position="center" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    agents: Object.values(state.agents).reverse(),
    isSignedIn: state.auth.isSignedIn
  };
};


export default connect(
  mapStateToProps,
  { fetchAgents }
)(AgentList);
