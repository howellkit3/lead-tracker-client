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
        <div className="right floated content">
            <Link to={`/contractors/edit/${contractor.id}`} className="ui button primary">Edit</Link>
            <button className="ui button negative">
                Delete
            </button>
        </div>
    );
  }

  renderList() {
    return this.props.contractors.map(contractor => {
      return (
        <div className="item" key={contractor.id}>
        {this.renderAdmin(contractor)}
          <i className="large middle aligned icon building" />
          <div className="content">
            {contractor.contractor_name}
          </div>
        </div>
      );
    });
  }

  renderCreate() {
      if (this.props.isSignedIn) {
            return (
              <div>
                <Link to="/contractors/new" className="ui button primary">
                    Create Stream
                </Link>
              </div>
            )
      }
  }

  render() {
    return (
      <div>
        <h2>Contractors</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
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
