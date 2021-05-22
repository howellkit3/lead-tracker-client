import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTitleCompanies } from '../../actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TitleCompanyList extends React.Component {
  componentDidMount() {
    this.props.fetchTitleCompanies();
  }

  renderAdmin(titleCompany) {
    return (
      <div className="right floated content">
        <Link to={`/title_companies/edit/${titleCompany._id}`} className="ui button primary">Edit</Link>
        <Link to={`/title_companies/delete/${titleCompany._id}`} className="ui button negative">Delete</Link>
      </div>
    );
  }

  renderList() {

    return this.props.titleCompany.map(titleCompany => {
      if (titleCompany._id) {
        return (
          <tr key={titleCompany._id}>
            <td>{titleCompany.name}</td>
            <td>{titleCompany.contact_person}</td>
            <td className="right aligned">{this.renderAdmin(titleCompany)}</td>
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
          <Link to="/title_companies/new" className="ui button primary">
            Add a Title Company
              </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui stackable four column grid" style={{ margin: 0, marginLeft: '75px', marginRight: '75px', paddingTop: 24 }}>
        <div className="two wide column">
          <h2>Title Company</h2>
        </div>
        <div className="fourteen wide column right aligned">
          {this.renderCreate()}
        </div>
        <div className="sixteen wide column">
          <table className="ui left aligned striped celled table">
            <thead>
              <tr>
                <th>Title Company Name</th>
                <th>Contact Person</th>
                <th className="right aligned">Actions</th>
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
    titleCompany: Object.values(state.title_companies).reverse(),
    isSignedIn: state.auth.isSignedIn
  };
};


export default connect(
  mapStateToProps,
  { fetchTitleCompanies }
)(TitleCompanyList);
