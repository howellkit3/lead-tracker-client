import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchLender, editLender } from '../../actions'
import LenderForm from './LenderForm';
class LenderEdit extends React.Component {

  componentDidMount() {
    this.props.fetchLender(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editLender(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.lender) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui stackable four column grid centered" style={{ margin: 0, marginLeft: '25px', marginRight: '25px', paddingTop: 24 }}>
        <div className="eight wide column" >
          <h2 className="ui dividing header">Edit a Lender</h2>
          <div className="field" style={{ marginTop: '5%' }}>
            <LenderForm
              initialValues={_.pick(this.props.lender, 'lender_name', 'point_of_contact')}
              onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { lender: state.lenders[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchLender, editLender }
)(LenderEdit);