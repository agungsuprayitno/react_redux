import React from 'react';

import {Col} from 'react-materialize';

export class OrderItem extends React.Component {

    render() {
        return (
            <Col s={6}>
                <Col s={12} className='border-b'>
                    <span className="flow-text">Detail Item</span>
                </Col>
                <Col s={12}>
                    <span> Deskripsi : </span> <span>Cuci AC</span>
                </Col>
                <Col s={12}>
                    <span> Quantity : </span> <span> 20 Unit</span>
                </Col>
                <Col s={12}>
                    <span> Harga Per Unit : </span> <span> Rp.100.000</span>
                </Col>
            </Col>
        );
    }

} 