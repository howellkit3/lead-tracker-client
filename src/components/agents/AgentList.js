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
        <Link to={`/agents/edit/${agent._id}`} className="ui button primary">Edit</Link>
        <Link to={`/agents/delete/${agent._id}`} className="ui button negative">Delete</Link>
      </div>
    );
  }

  renderList() {
    return this.props.agents.map(agent => {
      if (agent._id) {
        return (
          <tr key={agent._id}>
            <td>{agent.first_name} {agent.middle_name} {agent.last_name}</td>
            <td>{agent.email} </td>
            <td className="right aligned">{this.renderAdmin(agent)}</td>
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
                <th className="right aligned">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
        <ToastContainer autoClose={2000} position="bottom-right"/>
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
