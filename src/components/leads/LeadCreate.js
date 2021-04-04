import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createLead, fetchContractors, fetchLenders, fetchAgents, fetchAddresses } from '../../actions'

class LeadCreate extends React.Component {
    constructor() {
    super();
        this.state = {
            fields : [
                { name:'leadNumber', label: 'Lead Number:', type:'number', category:''},
                { name:'agent_id', label: 'Agent:', type:'select', category: 'agents'}, //select
                { name:'address_id', label: 'Address:', type:'select', category: 'addresses'}, //select
                { name:'titleCompany', label: 'Company Title:', type:'text', category:''}, //select
                { name:'hasEarnestMoneyDeposit', label: 'Earnest Money Deposit:', type:'checkbox', category:''}, //select
                { name:'isUnderRenovation', label: 'Under Renovation:', type:'checkbox', category:''}, //select
                { name:'isVacant', label: 'Vacant:', type:'checkbox', category:''}, //select
                { name:'vacantDate', label: 'Vacant Date:', type:'date', category:''}, //select
                { name:'isAssignedToContract', label: 'Assigned To Contract:', type:'checkbox', category:''}, //input
                { name:'leadSource', label: 'Lead Source:', type:'text', category:''}, //input
                { name:'lender_id', label: 'Lender:', type:'select', category: 'lenders'}, //select
                { name:'estimatedFinishDate', label: 'Estimated Finish Date:', type:'date', category:''}, //select
                { name:'contractor_id', label: 'Contractor:', type:'select', category:'contractors'}, //select
                { name:'isClosed', label: 'Is closed', type:'checkbox', category:''}, //select Open or Close
                { name:'closeDate', label: 'Closing Date:', type:'date', category:''} //select
            ]
        }
    }

    componentDidMount() {
        const {fetchAddresses, fetchAgents, fetchContractors, fetchLenders} = this.props;
        fetchAddresses();
        fetchAgents();
        fetchContractors();
        fetchLenders();
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

    renderSelect = ({input, label, meta, type, category}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        if(category === 'lenders') console.log(this.props[category]);
        return (
        <div className={className}>
            <label>{label}</label>
            <select {...input} autoComplete="off" >
                <option key={0}/>
                {Object.keys(this.props[category]).map((id) => {
                    const data = this.props[category][id]; 
                    return <option key={data.id} value={data.id}>
                        {category === 'addresses' && data.address}
                        {category === 'agents' && `${data.first_name} ${data.middle_name} ${data.last_name}`}
                        {category === 'lenders' && `${data.lender_name}`}
                        {category === 'contractors' && `${data.contractor_name}`}
                    </option>
                })
                }
            </select>
            {this.renderError(meta)}
        </div>
        );
    }
    

    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" type={type}/>
            {this.renderError(meta)}
        </div>
        );
    };

    onSubmit = (formValues) => {
        console.log("***** FORM", formValues);
        this.props.createLead(formValues);
    }
    
    render() {
        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                    className="ui form error">
                { this.state.fields.map((field, i) => {
                    return <Field key={i} name={field.name} 
                    label={field.label} 
                    type={field.type}
                    category={field.category}
                    component={field.type === "select" ? this.renderSelect : this.renderInput} />
                })

                }
                
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.leadNumber) { errors.leadNumber = 'You must enter a value'; } 
    if(!formValues.agent_id) { errors.agent_id = 'You must enter a value'; } 
    if(!formValues.address_id) { errors.address_id = 'You must enter a value'; } 
    if(!formValues.titleCompany) { errors.titleCompany = 'You must enter a value'; } 
    if(!formValues.vacantDate) { errors.vacantDate = 'You must enter a value'; } 
    if(!formValues.leadSource) { errors.leadSource = 'You must enter a value'; } 
    if(!formValues.lender_id) { errors.lender_id = 'You must enter a value'; } 
    if(!formValues.estimatedFinishDate) { errors.estimatedFinishDate = 'You must enter a value'; } 
    if(!formValues.contract_id) { errors.contract_id = 'You must enter a value'; } 
    if(!formValues.closeDate) { errors.closeDate = 'You must enter a value'; }
    if(!formValues.hasEarnestMoneyDeposit) formValues.hasEarnestMoneyDeposit = false; 
    if(!formValues.isUnderRenovation) formValues.isUnderRenovation = false; 
    if(!formValues.isAssignedToContract) formValues.isAssignedToContract = false; 
    if(!formValues.isClosed) formValues.isClosed = false; 
    if(new Date(formValues.estimatedFinishDate) < new Date()) { errors.estimatedFinishDate = "Estimated date must not be less than today"}
    if(new Date(formValues.closeDate) < new Date()) { errors.closeDate = "Closing date must not be less than today"}
    return errors;
}

const formWrapped = reduxForm({
    form: 'leadCreate',
    validate
})(LeadCreate);

const mapStateToProps = state => {
    return {
        addresses : state.addresses,
        agents : state.agents,
        contractors : state.contractors,
        lenders : state.lenders
    }
}

export default connect(mapStateToProps, { createLead, fetchAddresses, fetchAgents, fetchContractors, fetchLenders })(formWrapped)