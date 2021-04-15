import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLenders } from '../../actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      if (lender.id) {
        return (
          <tr key={lender.id}>
            <td>{lender.lender_name}</td>
            <td>{lender.point_of_contact}</td>
            <td class="right aligned">{this.renderAdmin(lender)}</td>
          </tr>
        );
      }
      return null;
    });

  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/lenders/new" className="ui button primary">
            Add a Lender
              </Link>
        </div>
      )
    }
  }

  render() {
    return (

      <div className="ui stackable four column grid" style={{ margin: 0, marginLeft: '75px', marginRight: '75px', paddingTop: 24 }}>
        <div className="two wide column">
          <h2>Lenders</h2>
        </div>
        <div className="fourteen wide column right aligned">
          {this.renderCreate()}
        </div>
        <div className="sixteen wide column">
          <table className="ui left aligned striped celled table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Point of Contact</th>
                <th className="right aligned">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
        <ToastContainer autoClose={3000} position="bottom-right" />
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
