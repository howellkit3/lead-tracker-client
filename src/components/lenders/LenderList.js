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
            <tr key={lender.id}>
              <td>{lender.lender_name}</td>
              <td>{this.renderAdmin(lender)}</td>
            </tr>
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

      <div className="ui main text container">
        <div className="ui grid">
          <div className="four wide column">
            <h2>Lenders</h2>
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
      lenders: Object.values(state.lenders).reverse(),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchLenders }
)(LenderList);
