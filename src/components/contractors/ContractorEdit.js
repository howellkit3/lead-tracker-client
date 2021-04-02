import React from 'react';
import { connect } from 'react-redux';
import { fetchContractor } from '../../actions'

class ContractorEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.contractor) {
            return <div>Loading...</div>;
        }

        return <div>{this.props.contractor.contractor_name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { contractor: state.contractor[ownProps.match.params.id]  };
}

export default connect(mapStateToProps, { fetchContractor } )(ContractorEdit);