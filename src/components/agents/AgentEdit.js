import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAgent, editAgent } from '../../actions'
import AgentForm from './AgentForm';

class AgentEdit extends React.Component {

    componentDidMount() {
        this.props.fetchAgent(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editAgent(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.agent) {
          return <div>Loading...</div>;
        }
    
        return (
          <div>
            <h3>Edit an Agent</h3>
            <AgentForm
              initialValues={_.pick(this.props.agent, 'first_name', 'middle_name', 'last_name', 'email')}
              onSubmit={this.onSubmit}
            />
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { agent: state.agents[ownProps.match.params.id]  };
}

export default connect(
    mapStateToProps,
    { fetchAgent, editAgent } 
    )(AgentEdit);