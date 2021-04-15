import React from 'react';
import { connect } from 'react-redux';
import { createLender } from '../../actions'
import LenderForm from './LenderForm';

class LenderCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createLender(formValues);
  }

  render() {
    return (
      <div className="ui stackable four column grid centered" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="eight wide column" >
          <h2 className="ui dividing header">Add new Lender</h2>
          <div className="field" style={{ marginTop: '5%' }}>
            <LenderForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createLender })(LenderCreate)