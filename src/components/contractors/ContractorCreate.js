import React from 'react';
import { connect } from 'react-redux';
import { createContractor } from '../../actions'
import ContractorForm from './ContractorForm';

class ContractorCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createContractor(formValues);
  }

  render() {
    return (
      <div className="ui stackable four column grid centered" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="eight wide column" >
          <h2 className="ui dividing header">Add new Contractor</h2>
          <div className="field" style={{ marginTop: '5%' }}>
            <ContractorForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createContractor })(ContractorCreate)