import React from 'react';

import {Row, Col} from 'react-materialize';

export class ApprovalRow extends React.Component {

    render() {
        return (
            <Row>
                <Col s={9}>
                    Tier {this.props.tier} : {this.props.name}
                </Col>
                <Col s={3}>
                    { this.props.result }
                </Col>
            </Row>
        );
    }

} 