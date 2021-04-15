import React from 'react';
import { connect } from 'react-redux';
import { createAgent } from '../../actions'
import AgentForm from './AgentForm';

class AgentCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createAgent(formValues);
  }

  render() {
    return (
      <div className="ui stackable four column grid centered" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="eight wide column" >
          <h2 className="ui dividing header">Add new Agent</h2>
          <div className="field" style={{ marginTop: '5%' }}>
            <AgentForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createAgent })(AgentCreate)