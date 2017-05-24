import React from 'react';

import {Row, Col} from 'react-materialize';
import {ApprovalRow} from './ApprovalRow.jsx';

export class OrderRecord extends React.Component {

    render() {
        var result = this.props.data.map((approval, index) =>
            <ApprovalRow
                tier={index + 1}
                name={approval.name}
                result={approval.result == null ? "" : approval.result ? "Accepted" : "Rejected"}/>
        );
        return (
            <Row>
                <Col s={12} className="col s12 mt-1 p-4 border z-depth-1">
                    <Col s={6}>
                        <Col s={12} className='border-b'>
                            <span className="flow-text ">Approval</span>
                        </Col>
                        <Col s={12} className="mt-2">
                            {result}
                        </Col>
                    </Col>
                    <Col s={6}>
                        <Col s={12} className='border-b'>
                            <span className="flow-text ">Additional Work</span>
                        </Col>
                        <Col s={12}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>

                    </Col>
                </Col>
            </Row>

        );
    }

} 