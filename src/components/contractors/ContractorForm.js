import React from 'react';
import { Field, reduxForm } from 'redux-form'

class ContractorForm extends React.Component {
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

  renderInputNumber= ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type="number"/>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error">
        <Field name="contractor_name"
          label="Enter Contractor Name"
          component={this.renderInput} />
        <Field name="contact_number"
          label="Contact Number"
          component={this.renderInputNumber} />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.contractor_name) {
    errors.contractor_name = 'You must enter a contactor name';
  }
  return errors;
}

export default reduxForm({
  form: 'contractorForm',
  validate
})(ContractorForm);