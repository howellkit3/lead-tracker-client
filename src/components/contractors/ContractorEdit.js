import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchContractor, editContractor } from '../../actions'
import ContractorForm from './ContractorForm';
class ContractorEdit extends React.Component {

    componentDidMount() {
        this.props.fetchContractor(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editContractor(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.contractor) {
          return <div>Loading...</div>;
        }
    
        return (

          <div className="ui main text container">
              <div className="ui form" >
                  <h4 className="ui dividing header">Edit a Contractor</h4>
                  <div className="field" style={{marginTop: '5%'}}>
                     <ContractorForm
                      initialValues={_.pick(this.props.contractor, 'contractor_name')}
                      onSubmit={this.onSubmit}/>
                  </div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { contractor: state.contractors[ownProps.match.params.id]  };
}

export default connect(
    mapStateToProps,
    { fetchContractor, editContractor } 
    )(ContractorEdit);