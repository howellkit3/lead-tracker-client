import React from 'react';
import { Field, reduxForm } from 'redux-form'

class AgentForm extends React.Component {
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
  if (!formValues.first_name) {
    errors.first_name = "You must enter an agent's first name";
  }
  if (!formValues.last_name) {
    errors.last_name = "You must enter an agent's last name";
  }
  if (!formValues.middle_name) {
    errors.middle_name = "You must enter an agent's middle name";
  }
  if (!formValues.email) {
    errors.email = "You must enter an agent's email";
  }
  return errors;
}

export default reduxForm({
  form: 'agentForm',
  validate
})(AgentForm);