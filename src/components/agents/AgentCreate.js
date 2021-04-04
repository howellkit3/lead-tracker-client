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
            <div>
                <h3>Add new Agent</h3>
                <AgentForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createAgent })(AgentCreate)