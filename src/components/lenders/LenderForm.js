import React from 'react';
import { Field, reduxForm } from 'redux-form'

class LenderForm extends React.Component {
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

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error">
        <Field name="lender_name"
          label="Enter Lender Name"
          component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.lender_name) {
    errors.LenderForm = 'You must enter a lender name';
  }
  return errors;
}

export default reduxForm({
  form: 'lenderForm',
  validate
})(LenderForm);