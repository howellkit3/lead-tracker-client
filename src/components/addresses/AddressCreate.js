import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createAddress } from '../../actions'

class AddressCreate extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        );
    };

    renderDropdown = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.createAddress(formValues);
    }
    
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                    className="ui form error">
                <Field name="address" 
                    label="Enter Address" 
                    component={this.renderInput} />
                <Field name="type" component="select">
                    <option disabled></option>
                    <option value="1">Construction</option>
                    <option value="2">On Market</option>
                    <option value="3">Problem</option>
                    <option value="4">Lis Pendens</option>
                </Field><br/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.address) {
        errors.address = 'You must enter an Address';
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'addressCreate',
    validate
})(AddressCreate);

export default connect(null, { createAddress })(formWrapped)