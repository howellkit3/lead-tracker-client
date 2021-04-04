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
      console.log("lender", this.props.lender);
        if (!this.props.lender) {
          return <div>Loading...</div>;
        }
    
        return (
          <div>
            <h3>Edit a Lender</h3>
            <LenderForm
              initialValues={_.pick(this.props.lender, 'lender_name')}
              onSubmit={this.onSubmit}
            />
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { lender: state.lenders[ownProps.match.params.id]  };
}

export default connect(
    mapStateToProps,
    { fetchLender, editLender } 
    )(LenderEdit);