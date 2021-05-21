import React from 'react';
import { connect } from 'react-redux';
import { createTitleCompany } from '../../actions'
import TitleCompanyForm from './TitleCompanyForm';

class TitleCompanyCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createTitleCompany(formValues);
  }

  render() {
    return (
      <div className="ui stackable four column grid centered" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="eight wide column" >
          <h2 className="ui dividing header">Add new Title Company</h2>
          <div className="field" style={{ marginTop: '5%' }}>
            <TitleCompanyForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createTitleCompany })(TitleCompanyCreate)