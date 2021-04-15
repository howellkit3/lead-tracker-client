import React from 'react';
import { connect } from 'react-redux';
import { createLead, fetchContractors, fetchLenders, fetchAgents, fetchAddresses } from '../../actions'
import LeadForm from './LeadForm';

class LeadCreate extends React.Component {
  componentDidMount() {
    const { fetchAddresses, fetchAgents, fetchContractors, fetchLenders } = this.props;
    fetchAddresses();
    fetchAgents();
    fetchContractors();
    fetchLenders();
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  onSubmit = (formValues) => {
    this.props.createLead(formValues);
  }

  render() {
    return (

      <div className="ui stackable two column grid" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="sixteen wide column">
          <h2 className="ui dividing header">Add new Record</h2>
          <div className="field" style={{ marginTop: '2%', backgroundColor: 'white' }}>
            <LeadForm
              addresses={this.props.addresses}
              agents={this.props.agents}
              contractors={this.props.contractors}
              lenders={this.props.lenders}
              onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addresses: state.addresses,
    agents: state.agents,
    contractors: state.contractors,
    lenders: state.lenders,
  }
}

export default connect(mapStateToProps, { createLead, fetchAddresses, fetchAgents, fetchContractors, fetchLenders })(LeadCreate)