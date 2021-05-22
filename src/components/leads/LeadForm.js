import React from 'react';
import { Field, reduxForm } from 'redux-form'
class LeadForm extends React.Component {
  constructor() {
    super();
    this.fields = [
      { name: 'agent_id', label: 'Agent:', type: 'select', category: 'agents' },
      { name: 'titleCompany_id', label: 'Title Company:', type: 'select', category: 'titleCompany' }, //connect new module for Title Company, change to dropdown
      { name: 'address', label: 'Address:', type: 'text', category: '' },
      { name: 'address_type', label: 'Address Type:', type: 'select', category: 'addressType' },
      { name: 'hasEarnestMoneyDeposit', label: 'Earnest Money Deposit:', type: 'select', category: 'emd' },
      { name: 'renovation', label: 'Renovation Remarks:', type: 'text', category: '' },
      { name: 'vacantDate', label: 'Vacant Date:', type: 'date', category: '' },
      { name: 'leadSource', label: 'Lead Source:', type: 'text', category: '' },
      { name: 'isAssignedToContract', label: 'Assigned To Contract?', type: 'checkbox', category: '' },
      { name: 'isUnderRenovation', label: 'Under Renovation?', type: 'checkbox', category: '' },
      { name: 'isVacant', label: 'Vacant?', type: 'checkbox', category: '' },
      { name: 'isClosed', label: 'Is closed?', type: 'checkbox', category: '' },
      { name: 'lender_id', label: 'Lender:', type: 'select', category: 'lenders' },
      { name: 'estimatedFinishDate', label: 'Estimated Finish Date:', type: 'date', category: '' },
      { name: 'contractor_id', label: 'Contractor:', type: 'select', category: 'contractors' },
      { name: 'closeDate', label: 'Closing Date:', type: 'date', category: '' },
      { name: 'holdback', label: 'Holdback:', type: 'text', category: '' }, //add in backend
      { name: 'deposit', label: 'Deposit:', type: 'text', category: '' }, //add in backend
      { name: 'lastTimeSpoken', label: 'Last time seller spoken to:', type: 'date', category: '' }, //add in backend
      { name: 'notes', label: 'Notes:', type: 'text', category: '' } //add in backend
    ];
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, key, label, meta, type }) => {
    const className = `four wide computer column field ${meta.error && meta.touched ? 'error' : ''}`;

    if (input.name === 'leadNumber') {
      return (
        <div key={key} className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off" type={type} value={Math.floor(Math.random() * 90000) + 10000} />
          {this.renderError(meta)}
        </div>
      );
    } else {
      return (
        <div key={key} className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off" type={type} />
          {this.renderError(meta)}
        </div>
      );
    }
  };

  renderSelect = ({ input, key, label, meta, category }) => {
    const className = `four wide computer column field ${meta.error && meta.touched ? 'error' : ''}`;
    if (category === 'addressType') {
      return (
        <div key={key} className={className}>
          <label>{label}</label>
          <select {...input} autoComplete="off" >
            <option default value="">Select Address Type</option>
            <option value="1">Construction</option>
            <option value="2">On Market</option>
            <option value="3">Problem</option>
            <option value="4">Lis Pendens</option>
            <option value="5">Assignment</option>
          </select>
          {this.renderError(meta)}
        </div>
      );
    } else if (category === 'emd') {
      return (
        <div key={key} className={className}>
          <label>{label}</label>
          <select {...input} autoComplete="off" >
            <option default value="">Select Earnest Money Deposit</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="?">?</option>
          </select>
          {this.renderError(meta)}
        </div>
      );
    } else {
      return (
        <div key={key} className={className}>
          <label>{label}</label>
          <select {...input} autoComplete="off" >
            <option key={0} />
            {Object.keys(this.props[category]).map((id) => {
              const data = this.props[category][id];
              if (data.first_name !== undefined
                || data.lender_name !== undefined || data.contractor_name !== undefined || data.name !== undefined) {
                return <option key={data._id} value={data._id}>
                  {category === 'agents' && `${data.first_name} ${data.middle_name} ${data.last_name}`}
                  {category === 'lenders' && `${data.lender_name}`}
                  {category === 'contractors' && `${data.contractor_name}`}
                  {category === 'titleCompany' && `${data.name}`}
                </option>
              }
              return null;
            })
            }
          </select>
          {this.renderError(meta)}
        </div>
      );
    }
  };

  renderCheckbox = ({ input, key, label, meta }) => {
    const className = `four wide computer column field ${meta.error && meta.touched ? 'error' : ''}`;
    const value = input.value;
    return (
      <div key={key} className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type="checkbox" checked={value} style={{ marginTop: '4px', marginLeft: '4px', transform: 'scale(1.5)' }} />
        {this.renderError(meta)}
      </div>

    );
  };

  onSubmit = formValues => {
    formValues['leadNumber'] = Math.floor(Math.random() * 90000) + 10000;
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div className="ui equal width grid">
        <div className="sixteen wide column">
          <div className="ui segment">
            <form
              style={{ fontSize: '1.9vh' }}
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error">
              <div className="ui stackable grid">
                {this.fields.map((field, index) => {
                  return <Field name={field.name}
                    key={index}
                    label={field.label}
                    type={field.type}
                    category={field.category}
                    component={field.type === "select" ? this.renderSelect : field.type === "checkbox" ? this.renderCheckbox : this.renderInput} />
                })}
                <div className="ten wide column field centered">
                  <button className="fluid ui button primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.agent_id) { errors.agent_id = 'You must enter a value'; }
  // if(!formValues.address_id) { errors.address_id = 'You must enter a value'; } 
  // if(!formValues.titleCompany) { errors.titleCompany = 'You must enter a value'; } 
  // if(!formValues.vacantDate) { errors.vacantDate = 'You must enter a value'; } 
  // if(!formValues.leadSource) { errors.leadSource = 'You must enter a value'; } 
  if (formValues.lender_id === undefined) { errors.lender_id = 'You must enter a value'; }
  // if(!formValues.estimatedFinishDate) { errors.estimatedFinishDate = 'You must enter a value'; } 
  if (formValues.contractor_id === undefined) { errors.contractor_id = 'You must enter a value'; }
  if (formValues.titleCompany_id === undefined) { errors.titleCompany_id = 'You must enter a value'; }
  // if(!formValues.closeDate) { errors.closeDate = 'You must enter a value'; }
  // if(!formValues.hasEarnestMoneyDeposit) formValues.hasEarnestMoneyDeposit = false; 
  // if(!formValues.isUnderRenovation) formValues.isUnderRenovation = false; 
  // if(!formValues.isAssignedToContract) formValues.isAssignedToContract = false; 
  // if(!formValues.isClosed) formValues.isClosed = false; 
  // if(new Date(formValues.estimatedFinishDate) < new Date()) { errors.estimatedFinishDate = "Estimated date must not be less than today"}
  // if(new Date(formValues.closeDate) < new Date()) { errors.closeDate = "Closing date must not be less than today"}
  return errors;
}

export default reduxForm({
  form: 'leadForm',
  enableReinitialize: true,
  validate
})(LeadForm);