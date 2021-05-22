import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchTitleCompany, editTitleCompany } from '../../actions'
import TitleCompanyForm from './TitleCompanyForm';

class TitleCompanyEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTitleCompany(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editTitleCompany(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.titleCompany) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui stackable four column grid centered" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="eight wide column" >
          <h2 className="ui dividing header">Edit a Title Company</h2>
          <div className="field" style={{ marginTop: '5%' }}>
            <TitleCompanyForm
              initialValues={_.pick(this.props.titleCompany, 'name', 'contact_person')}
              onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { titleCompany: state.title_companies[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchTitleCompany, editTitleCompany }
)(TitleCompanyEdit);