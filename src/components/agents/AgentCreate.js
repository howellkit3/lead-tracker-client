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
            <div className="ui main text container">
                <div className="ui form" >
                    <h4 className="ui dividing header">Add new Agent</h4>
                    <div className="field" style={{marginTop: '5%'}}>
                        <AgentForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { createAgent })(AgentCreate)