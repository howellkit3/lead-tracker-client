import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContractors } from '../../actions';

class ContractorList extends React.Component {
  componentDidMount() {
    this.props.fetchContractors();
  }

  renderAdmin(contractor) {
    return (
        <div className="left floated content">
            <Link to={`/contractors/edit/${contractor.id}`} className="ui button primary">Edit</Link>
            <Link to={`/contractors/delete/${contractor.id}`} className="ui button negative">Delete</Link>
        </div>
    );
  }

  renderList() {
    return this.props.contractors.map(contractor => {
      if(contractor.id){
        return (
            <tr key={contractor.id}>
              <td>{contractor.contractor_name}</td>
              <td>{this.renderAdmin(contractor)}</td>
            </tr>
        );
      }
    });
  }

  renderCreate() {
      // if (this.props.isSignedIn) {
            return (
              <div>
                <Link to="/contractors/new" className="ui button primary">
                    Create Stream
                </Link>
              </div>
            )
      // }
  }

  render() {
    return (
      <div className="ui main text container">
        <div className="ui grid">
          <div className="four wide column">
            <h2>Contractors</h2>
          </div>
          <div className="twelve wide column right aligned">
            {this.renderCreate()}
          </div>
          <div className="sixteen wide column">
            <table className="ui left aligned striped celled table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      contractors: Object.values(state.contractors),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchContractors }
)(ContractorList);
