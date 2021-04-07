import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLeads } from '../../actions';

class LeadList extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage :  1,
      itemPerPage: 3,
      list: []
    }
  }
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
    //DATA LIMIT WITH PAGINATION
    let data = Object.keys({...this.props.leads}).slice((this.state.activePage * this.state.itemPerPage) - this.state.itemPerPage, this.state.itemPerPage * this.state.activePage)
    if(data.length === 0 || !data) {
      return <div class="ui segment">
        <div class="ui active inverted dimmer centered">
          <div class="ui text loader">Loading</div>
        </div>
        <p>Data Loading</p>
      </div>
    }
    return data.map(lead1 => {
      const lead = this.props.leads[lead1];
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

  //PAGINATION PART
  renderPagination() {
    let { activePage }  = {...this.state};
    const pages = Object.keys(this.props.leads).length / this.state.itemPerPage;
    const elements = [];
    for(let i = 0; i < pages; i++) {
      elements.push(<a href='#' onClick={() => this.actionPagination(i+1)} className="item">{i+1}</a>)
    }
    
    return <React.Fragment>
      <a href='#' onClick={(e) => this.actionPagination(0,1,e)} className="item">{'<'}</a>
      {elements}
      <a href='#' onClick={(e) => this.actionPagination(0,2,e)} className="item">{'>'}</a>
    </React.Fragment>
  }

  renderLimit() {
    return <select onChange={(event) => this.changeLimit(event)}>
      <option value={3}>3</option>
      <option value={5}>5</option>
      <option value={10}>10</option>
    </select>
  }

  actionPagination(page, mode, e) {
    const maxPage = Math.round(Object.keys(this.props.leads).length / this.state.itemPerPage);
    if(this.state.activePage === 1 && mode === 1 || this.state.activePage === maxPage && mode === 2) return
    if(!mode) page = page < 1 ? 1 : page > maxPage ? maxPage : page;
    else page = mode === 1 ? this.state.activePage - 1 : this.state.activePage + 1;
    this.setState({activePage : page});
  }

  changeLimit(e) {
    this.setState({itemPerPage: e.target.value})
  }
  //END OF PAGINATION
  renderCreate() {
      if (this.props.isSignedIn) {
            return (
              <div>
                <Link to="/leads/new" className="ui button primary">
                    Create Stream
                </Link>
              </div>
            )
      }
  }

  render() {
    return (
      <div className="container">
        <h2>Leads</h2>
        <table className="ui celled padded table">
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
            {/* PAGINATION PART */}
            <tfoot>
              <tr>
                <th colspan="13">
                  <div className="ui right floated pagination menu">
                    {this.renderLimit()}
                    {this.renderPagination()}
                  </div>
                  <div className="ui left floated">
                    {this.renderCreate()}
                  </div>
                </th>
              </tr>
            </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      leads: state.leads,
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchLeads }
)(LeadList);
