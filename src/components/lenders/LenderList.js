import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLenders } from '../../actions';

class LenderList extends React.Component {
  componentDidMount() {
    this.props.fetchLenders();
  }

  renderAdmin(lender) {
    return (
        <div className="right floated content">
            <Link to={`/lenders/edit/${lender.id}`} className="ui button primary">Edit</Link>
            <Link to={`/lenders/delete/${lender.id}`} className="ui button negative">Delete</Link>
        </div>
    );
  }

  renderList() {
    return this.props.lenders.map(lender => {
       if(lender.id) {
        return (
          <div className="item" key={lender.id}>
          {this.renderAdmin(lender)}
            <i className="large middle aligned icon male" />
            <div className="content">
              {lender.lender_name}
            </div>
          </div>
        );
       }
    });
  }

  renderCreate() {
      // if (this.props.isSignedIn) {
            return (
              <div>
                <Link to="/lenders/new" className="ui button primary">
                    Create Lender
                </Link>
              </div>
            )
      // }
  }

  render() {
    return (
      <div>
        <h2>Lenders</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      lenders: Object.values(state.lenders),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchLenders }
)(LenderList);
