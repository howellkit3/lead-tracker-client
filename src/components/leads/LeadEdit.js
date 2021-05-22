import React from 'react';
import { connect } from 'react-redux';
import { editLead, fetchLeads, fetchContractors, fetchLenders, fetchAgents, fetchTitleCompanies } from '../../actions'
import LeadForm from './LeadForm';

class LeadEdit extends React.Component {
  componentWillMount() {
    const { fetchLeads, fetchAgents, fetchContractors, fetchLenders, fetchTitleCompanies } = this.props;
    fetchLeads();
    fetchAgents();
    fetchContractors();
    fetchLenders();
    fetchTitleCompanies();
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
    const { id } = this.props.match.params;
    formValues.id = id;;
    this.props.editLead(id, formValues);
  }

  render() {
    return (
      <div className="ui stackable two column grid" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="sixteen wide column">
          <h2 className="ui dividing header">Edit Record</h2>
          <div className="field" style={{ marginTop: '2%' }}>
            <LeadForm
              initialValues={this.props.lead}
              agents={this.props.agents}
              contractors={this.props.contractors}
              lenders={this.props.lenders}
              titleCompany={this.props.titleCompany}
              onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lead: state.leads[ownProps.match.params.id],
    agents: state.agents,
    contractors: state.contractors,
    titleCompany: state.title_companies,
    lenders: state.lenders
  }
}

export default connect(mapStateToProps, { editLead, fetchLeads, fetchAgents, fetchContractors, fetchLenders, fetchTitleCompanies })(LeadEdit)