import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchTitleCompany, deleteTitleCompany } from '../../actions';

class TitleCompanyDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTitleCompany(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTitleCompany(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/titleCompany" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.titleCompany) {
      return 'Are you sure you want to delete this title company?';
    }

    return `Are you sure you want to delete the title company with name of: ${this.props.titleCompany.titleCompany_name
      }`;
  }

  render() {
    return (
      <Modal
        title="Delete a Title Company"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/titleCompany')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { titleCompany: state.titleCompany[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTitleCompany, deleteTitleCompany }
)(TitleCompanyDelete);
