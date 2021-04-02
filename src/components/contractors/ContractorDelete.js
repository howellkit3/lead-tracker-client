import React from 'react';
import { connect } from 'react-redux'
import Modal from '../Modal';
import history from '../../history';
import { fetchContractor } from '../../actions'

class ContractorDelete extends React.Component {
    componentDidMount(){
        this.props.fetchContractor(this.props.match.params.id);
    }

    renderActions() {
        return (
            <>
                <button className="ui button negative">Delete</button>
                <button className="ui button ">Cancel</button>
            </>
        )
    }

    render() {
        return (
            <div>
                Delete a Contractor
                <Modal 
                    title="Delete Contractor"
                    content="Are you sure you want to delete this Contractor?"
                    actions={this.renderActions}
                    onDismiss={()=>history.push('/contractors')}
                />
            </div>
        )
    }
};

export default connect(null, {fetchContractor})(ContractorDelete);