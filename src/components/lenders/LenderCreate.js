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
            <div className="ui main text container">
                <div className="ui form" >
                    <h4 className="ui dividing header">Add new Lender</h4>
                    <div className="field" style={{marginTop: '5%'}}>
                        <LenderForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { createLender })(LenderCreate)