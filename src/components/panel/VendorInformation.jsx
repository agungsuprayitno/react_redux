import React from 'react';

import {Col} from 'react-materialize';

export class VendorInformation extends React.Component {

    render() {
        return (
            <Col s={6} className="mt-2">
                <Col s={12} className='border-b'>
                    <span className="flow-text">Vendor</span>
                </Col>

                <Col s={12}>
                    <span> Nama : </span> <span>{this.props.vendor}</span>
                </Col>
                <Col s={12}>
                    <span> Phone : </span> <span>{this.props.phone}</span>
                </Col>
                <Col s={12}>
                    <span> Email : </span> <span>{this.props.email}</span>
                </Col>
            </Col>
        );
    }

} 