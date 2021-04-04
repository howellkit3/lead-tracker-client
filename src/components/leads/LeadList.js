import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLeads } from '../../actions';

class LeadList extends React.Component {
  componentDidMount() {
    this.props.fetchLeads();
  }

  renderAdmin(lead) {
    return (
        <p className="right floated content">
            <Link to={`/leads/edit/${lead.id}`} className="ui button primary" >Edit</Link>
            <Link to={`/leads/delete/${lead.id}`} className="ui button negative" >Delete</Link>
        </p>
    );
  }

  renderList() {

    // return Object.keys(this.props.leads).map(lead1 => {
      return this.props.leads.map(lead => {
      // const lead = this.props.leads[lead1];
      return (
          <tr key={lead.id}>
              <td>{lead.agentData}</td>
              <td>{lead.addressData['address']}</td>
              <td>{lead.titleCompany}</td>
              <td>{lead.hasEarnestMoneyDeposit ? 'Y' : 'N'}</td>
              <td>{lead.isUnderRenovation ? 'Y' : 'N'}</td>
              <td>{lead.isVacant ? 'Y' : 'N'}</td>
              <td>{lead.isAssignedToContract ? 'Y' : 'N'}</td>
              <td>{lead.leadSource}</td>
              <td>{lead.lenderData['lender_name']}</td>
              <td>{lead.estimatedFinishDate}</td>
              <td>{lead.contractorData['contractor_name']}</td>
              <td>{lead.isClosed ? 'Closed' : lead.closeDate}</td>
              <td>{this.renderAdmin(lead)}</td>
          </tr>
        );
    });
  }

  renderCreate() {
      // if (this.props.isSignedIn) {
            return (
              <div>
                <Link to="/leads/new" className="ui button primary">
                    Create Stream
                </Link>
              </div>
            )
      // }
  }

  render() {
    return (
      <div>
        <h2>Leads</h2>
        <table>
            <thead>
                <th>Agent</th>
                <th>Address</th>
                <th>Title Company</th>
                <th>EMD</th>
                <th>Renovation (Y/N)</th>
                <th>Vacant</th>
                <th>Assigned to Contract</th>
                <th>Lead Source</th>
                <th>Lender</th>
                <th>Estimated Finish</th>
                <th>Contractor</th>
                <th>Close of Escrow</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
        </table>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      leads: Object.values(state.leads),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchLeads }
)(LeadList);
