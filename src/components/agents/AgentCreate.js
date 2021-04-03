import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createAgent } from '../../actions'

class AgentCreate extends React.Component {

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

    onSubmit = (formValues) => {
        this.props.createAgent(formValues);
    }
    
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                    className="ui form error">
                <Field name="first_name" 
                    label="Enter First Name" 
                    component={this.renderInput} />
                <Field name="middle_name" 
                    label="Enter Middle Name" 
                    component={this.renderInput} />
                <Field name="last_name" 
                    label="Enter Last Name" 
                    component={this.renderInput} />
                <Field name="email" 
                    label="Enter Email" 
                    component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.first_name) {
        errors.first_name = 'You must enter a first name';
    } else if (!formValues.middle_name) {
        errors.middle_name = 'You must enter a middle name';
    } else if (!formValues.last_name) {
        errors.last_name = 'You must enter a last name';
    } else if (!formValues.middle_name) {
        errors.email = 'You must enter a email';
    } else {
        return errors;
    }
}

const formWrapped = reduxForm({
    form: 'agentCreate',
    validate
})(AgentCreate);

export default connect(null, { createAgent })(formWrapped)