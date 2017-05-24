import React from 'react';

import {Col} from 'react-materialize';
import {Link} from 'react-router';

export class InvoiceDueDate extends React.Component {

    render() {
        var url = "/invoice/" + this.props.invoiceId;
        return (
            <Col s={6} className="mt-2">
                <h1>{this.props.url}</h1>
                <Col s={10} className="z-depth-1 border p-0">
                    <Col s={6} className="orange darken-1 center-align py-2">
                        <span className="white-text"><b>Nomor Invoice : </b></span>
                    </Col>
                    <Col s={6} className="grey lighten-3 center-align py-2">
                        <span><Link to={url}>{this.props.invoiceNumber}</Link></span>
                    </Col>
                    <Col s={6} className="orange darken-1 center-align py-2">
                        <span className="white-text"><b>Tanggal Invoice : </b></span>
                    </Col>
                    <Col s={6} className="grey lighten-3 center-align py-2">
                        <span>{this.props.invoiceDate}</span>
                    </Col>
                    <Col s={6} className="orange darken-1 center-align py-2">
                        <span className="white-text"><b>Jatuh Tempo : </b></span>
                    </Col>
                    <Col s={6} className="grey lighten-3 center-align py-2">
                        <span>{this.props.invoiceDueDate}</span>
                    </Col>
                    <Col s={12} className="center-align py-2">
                        <span className="flow-text"><b>{this.props.price}</b></span>
                    </Col>
                </Col>
            </Col>
        );
    }

} 