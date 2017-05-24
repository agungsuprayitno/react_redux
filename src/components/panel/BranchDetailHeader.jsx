import React from 'react';

import { Row } from 'react-materialize';

export class BranchDetailHeader extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <h4>Branch Code: {this.props.branchCode}</h4>
                </Row>
                <Row>
                    Address: {this.props.address}
                </Row>
                <Row>
                    City: {this.props.city}
                </Row>
                <Row>
                    Country: {this.props.country}
                </Row>
            </div>
        );
    }

} 