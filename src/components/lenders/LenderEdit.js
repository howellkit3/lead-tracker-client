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
          <div className="ui main text container">
            <div className="ui form" >
                <h4 className="ui dividing header">Edit a Lender</h4>
                <div className="field" style={{marginTop: '5%'}}>
                 <LenderForm
                    initialValues={_.pick(this.props.lender, 'lender_name')}
                    onSubmit={this.onSubmit}/>
                </div>
            </div>
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