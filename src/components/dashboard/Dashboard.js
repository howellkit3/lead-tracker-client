import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLeads, fetchContractors, fetchLenders, fetchAgents, fetchAddresses } from '../../actions';

export class Dashboard extends Component {
  constructor() {
    super();
    this.category = [
      { title: "leads", label: "Inventory", color: "blue", icon: "file" },
      { title: "agents", label: "Agents", color: "blue", icon: "user" },
      { title: "contractors", label: "Contractors", color: "blue", icon: "building" },
      { title: "lenders", label: "Lenders", color: "blue", icon: "briefcase" }
    ]
    this.reportTabs = [
      { title: "leads/sort/0", label: "Closed Transaction", color: "green", category: 2 },
      { title: "leads/sort/1", label: "Transaction Near Deadline", color: "orange", category: 0 },
      { title: "leads/sort/2", label: "Transaction Past Deadline", color: "red", category: 1 }
      
    ]
  }

  componentDidMount() {
    const { fetchLeads, fetchAddresses, fetchAgents, fetchContractors, fetchLenders } = this.props;
    fetchLeads();
    fetchAddresses();
    fetchAgents();
    fetchContractors();
    fetchLenders();
  }

  createTabs() {
    return <div className="ui stackable four column grid">
      {
        this.category.map((cat) => {
          return <Link key={cat.title} to={`/${cat.title}`}>
            <div className={`ui link ${cat.color} cards`} style={{marginTop: '5px', marginBottom: '5px'}}>
              <div className="card">
                <div className="content">
                  <i className={`left floated huge ${cat.icon} icon ${cat.color} circular`}></i>
                  <div className="header">
                    {cat.label}
                  </div>
                  <div className={`ui huge ${cat.color} statistic`}>
                    <div className="value">
                      {this.props[cat.title].length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        })
      }
    </div>
  }

  createReportTabs() {
    const sort0 = this.props.leads.filter((x) => {
      let today = new Date();
      let originalData = new Date(x.estimatedFinishDate);
      let basisDate = new Date(x.estimatedFinishDate);
      basisDate.setMonth(basisDate.getMonth() - 1); // Date less than 1 month before estimated Finish date
      return x.isClosed !== true && today >= basisDate && today <= originalData
    }).length;
    const sort1 = this.props.leads.filter((x) => x.isClosed !== true && new Date(x.estimatedFinishDate) < new Date()).length;
    const sort2 = this.props.leads.filter((x) => x.isClosed === true).length;
    const totalItem = this.props.leads.length;
    return <div className="ui stackable grid">
      {
        this.reportTabs.map((cat) => {
          return <Link key={cat.title} to={`/${cat.title}`} className="centered">
            <div className={`ui link ${cat.color} cards`} style={{marginTop: '5px', marginBottom: '5px'}}>
              <div className="card">
                <div className="content">
                  <div className={`ui ${cat.color} statistic circular`} >
                    <div className="value">
                      {cat.category === 0 && `${((sort0 / totalItem || 0) * 100).toFixed(2)} %`}
                      {cat.category === 1 && `${((sort1 / totalItem || 0) * 100).toFixed(2)} %`}
                      {cat.category === 2 && `${((sort2 / totalItem || 0) * 100).toFixed(2)} %`}
                    </div>
                  </div>
                  <div className="header">
                    {cat.label}
                  </div>
                  <div className="header2">
                    {cat.category === 0 && <h2>{`${sort0}/${totalItem}`}</h2>}
                    {cat.category === 1 && <h2>{`${sort1}/${totalItem}`}</h2>}
                    {cat.category === 2 && <h2>{`${sort2}/${totalItem}`}</h2>}
                  </div>
                </div>

              </div>
            </div>
          </Link>
        })
      }
    </div>
  }

  createTestTabs() {
    return <div className="ui stackable grid">
      {
        this.reportTabs.map((cat) => {
          return <Link key={cat.title} to={`/${cat.title}`}>
            <div className={`ui link ${cat.color} cards`}>
              <div className="card">
                <div className="content">
                  <i className={`left floated huge ${cat.icon} icon ${cat.color} circular`}></i>
                  <div className="header">
                    {cat.label}
                  </div>
                  <div className={`ui huge ${cat.color} statistic`}>
                    <div className="value">
                      {this.props[cat.title].length}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Link>
        })
      }
    </div>
  }

  render() {
    return (
      <div className="ui stackable four column grid" style={{ minHeight: '92.3vh', margin: 0, marginLeft: '75px', marginRight: '75px', backgroundColor: 'red' }}>
        <div className="sixteen wide column" style={{ backgroundColor: 'white', paddingTop: 32 }}>
          <h3 style={{ color: '#7f8c8d', fontWeight: 300, margin: 0 }}>
            Overview
          </h3>
          <h1 style={{ fontWeight: 700, margin: 0 }}>
            Dashboard
          </h1>

          <div className="sixteen wide column left aligned" style={{ paddingTop: '2%', backgroundColor: '#FFFF' }}>
            {this.createTabs()}
          </div>
          <div className="sixteen wide column left aligned" style={{ paddingTop: '3%', backgroundColor: '#FFFF' }}>
          {/* <h2 style={{ fontWeight: 700, marginBottom: '25px' }}>
            Reporting Tabs
          </h2> */}
            {this.createReportTabs()}
          </div>
        </div>
      </div >
    )
  }
}


const mapStateToProps = state => {
  return {
    leads: Object.values(state.leads),
    addresses: Object.values(state.addresses),
    agents: Object.values(state.agents),
    contractors: Object.values(state.contractors),
    lenders: Object.values(state.lenders),
    isSignedIn: state.auth.isSignedIn
  };
};


export default connect(
  mapStateToProps,
  { fetchLeads, fetchAddresses, fetchAgents, fetchContractors, fetchLenders }
)(Dashboard);
