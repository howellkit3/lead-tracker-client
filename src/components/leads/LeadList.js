import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLeads } from '../../actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './LeadList.css'

class LeadList extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      itemPerPage: 50,
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

  processList() {
    let processedData;
    if (this.props.match.params) {
      processedData = [...Object.keys({ ...this.props.leads })].sort((a, b) => {
        switch (+this.props.match.params.id) {
          case 0:
          case 1:
            return new Date(this.props.leads[a].estimatedFinishDate) - new Date(this.props.leads[b].estimatedFinishDate);
          case 2:
            return this.props.leads[b].isClosed - this.props.leads[a].isClosed;
          default:
            return null;
        }
      })
    } else {
      processedData = [...Object.keys({ ...this.props.leads })].reverse();
    }

    return processedData;
  }

  manageColor(type) {
    if (+type === 1) {
      return "construction-yellow"
    } if (+type === 2) {
      return "on-market-blue"
    } if (+type === 3) {
      return "problem-red"
    } if (+type === 4) {
      return "lis-pendens-green"
    } else {
      return null
    }
  }

  manageAddressType(type) {
    if (+type === 1) {
      return "Construction"
    } if (+type === 2) {
      return "On Market"
    } if (+type === 3) {
      return "Problem"
    } if (+type === 4) {
      return "Green"
    } else {
      return null
    }
  }

  renderList(data) {
    //DATA LIMIT WITH PAGINATION
    return data.map(lead1 => {
      const lead = this.props.leads[lead1];
      if (lead.leadNumber != undefined) {
        return (
          <tr key={lead.id}>
            {/* <td>{lead.leadNumber}</td> */}
            <td>{lead.agentData}</td>
            <td className={this.manageColor(lead.address_type)}>{lead.address}</td>
            <td>{this.manageAddressType(lead.address_type)}</td>
            <td>{lead.titleCompany}</td>
            <td>{lead.hasEarnestMoneyDeposit}</td>
            <td>{lead.renovation}</td>
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
      }
      return null;
    })
  }

  //PAGINATION PART
  renderPagination() {
    const pages = Object.keys(this.props.leads).length / this.state.itemPerPage;
    const elements = [];
    for (let i = 0; i < pages; i++) {
      elements.push(<a href='#' key={i} onClick={() => this.actionPagination(i + 1)} className="item">{i + 1}</a>)
    }

    return <React.Fragment>
      <a href='#' onClick={(e) => this.actionPagination(0, 1, e)} className="item">{'<'}</a>
      {elements}
      <a href='#' onClick={(e) => this.actionPagination(0, 2, e)} className="item">{'>'}</a>
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
    if ((this.state.activePage === 1 && mode === 1) || (this.state.activePage === maxPage && mode === 2)) return
    if (!mode) page = page < 1 ? 1 : page > maxPage ? maxPage : page;
    else page = mode === 1 ? this.state.activePage - 1 : this.state.activePage + 1;
    this.setState({ activePage: page });
  }

  changeLimit(e) {
    this.setState({ itemPerPage: e.target.value })
  }
  //END OF PAGINATION
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/leads/new" className="ui button primary">
            Add new Record
            </Link>
        </div>
      )
    }
  }

  renderLoader(data) {
    if (!data) {
      return <div className="ui segment sixteen wide">
        <div className="ui active inverted dimmer centered">
          <div className="ui text loader">Loading</div>
        </div>
        <p>Data Loading</p>
      </div>
    }

    if (data.length === 0) {
      return <div className="ui segment sixteen wide">
        <div className="ui active centered">
          <h3>No Data</h3>
        </div>
      </div>
    }
  }

  renderTable(data) {
    if (data[0] != undefined) {
      return (
        <table className="ui fixed striped celled table">
          <thead className="full-width">
            <tr>
              {/* <th>Lead ID</th> */}
              <th>Agent</th>
              <th>Address</th>
              <th>Type</th>
              <th>Title Company</th>
              <th>EMD</th>
              <th>Renovation</th>
              <th>Renovation (Y/N)</th>
              <th>Vacant</th>
              <th>Assigned to Contract</th>
              <th>Lead Source</th>
              <th>Lender</th>
              <th>Estimated Finish</th>
              <th>Contractor</th>
              <th>Close of Escrow</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList(data)}
          </tbody>
          {/* PAGINATION PART */}
          <tfoot>
            <tr>
              <th colSpan="15">
                <div className="ui right floated pagination menu">
                  {this.renderLimit()}
                  {this.renderPagination()}
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      )
    }
  }

  render() {
    let processedData = this.processList();
    let data = processedData.slice((this.state.activePage * this.state.itemPerPage) - this.state.itemPerPage, this.state.itemPerPage * this.state.activePage)

    return (
      <div className="ui stackable four column grid" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="four wide column">
          <h1>Inventory</h1>
        </div>
        <div className="twelve wide column right aligned">
          {this.renderCreate()}
        </div>
        <div className="sixteen wide column">
          {this.renderLoader(data)}
          {data != undefined ? this.renderTable(data) : null}
        </div>
        <ToastContainer autoClose={2000} position="bottom-right" />
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
