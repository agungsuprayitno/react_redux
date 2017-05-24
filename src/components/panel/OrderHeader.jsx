import React from 'react';

import {Row, Col} from 'react-materialize';
import {OrderStatus} from './OrderStatus.jsx';
import {InvoiceDueDate} from './InvoiceDueDate.jsx';
import {VendorInformation} from './VendorInformation.jsx';
import {OrderItem} from './OrderItem.jsx';

export class OrderHeader extends React.Component {

    render() {
        return (
            <Row>
                <Col s={12} className="col s12 mt-1 p-4 border z-depth-1">
                    <OrderStatus status={this.props.status}/>
                    <InvoiceDueDate
                        invoiceId={this.props.invoiceId}
                        invoiceNumber={this.props.invoiceNumber}
                        invoiceDate={this.props.invoiceDate}
                        invoiceDueDate={this.props.invoiceDueDate}
                        price={this.props.price}
                    />
                    <VendorInformation
                        vendorName={this.props.vendorName}
                        phone={this.props.phone}
                        email={this.props.email}
                    />
                    <OrderItem/>
                </Col>
            </Row>
        );
    }

} 