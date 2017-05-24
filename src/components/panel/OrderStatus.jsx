import React from 'react';

import {Col} from 'react-materialize';

export class OrderStatus extends React.Component {

    render() {
        var fontColor = "flow-text ";
        if (this.props.status === 'Completed')
            fontColor += "green-text";
        else if (this.props.status === 'Cancel')
            fontColor += "red-text";
        else if (this.props.status === 'Not approved')
            fontColor += "red-text";
        var status =
            <span className={fontColor}>
                <b>{this.props.status}</b>
            </span>
        return (
            <Col s={6}>
                <Col s={12} className='border-b'>
                    <span className="flow-text ">Order Status</span>
                </Col>
                <Col s={12}>
                    <span> Status : </span> {status}
                </Col>
            </Col>
        );
    }

} 