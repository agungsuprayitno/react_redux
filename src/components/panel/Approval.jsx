import React from 'react';

import { Row, Col, Input, Button } from 'react-materialize';

export class Approval extends React.Component {

    render() {
        var options = this.props.users.map((user) => <option value={user.id}>{user.name}</option>);
        return (
            <Row>
                <Col s={6} className="col s12 mt-1 p-4 border z-depth-1">
                    <Col s={12} className='border-b'>
                        <span className="flow-text ">Add Approval</span>
                    </Col>
                    <Col s={12} className="mt-2">
                        <Row>
                            <Col s={2} className="mt-4">
                                <span>Tier 1: </span>
                            </Col>
                            <Col s={4}>
                                <Input s={12} type='select' defaultValue='1'>
                                    {options}
                                </Input>
                            </Col>
                        </Row>
                    </Col>
                    <Col s={12}>
                        <Row>
                            <Col s={2} className="mt-2">
                                <span>Tier 2: </span>
                            </Col>
                            <Col s={4}>
                                <Input s={12} type='select' defaultValue='2'>
                                    {options}
                                </Input>
                            </Col>
                        </Row>
                    </Col>
                    <Col s={12}>
                        <Row>
                            <Col s={2} className="mt-2">
                                <span>Tier 3: </span>
                            </Col>
                            <Col s={4}>
                                <Input s={12} type='select' defaultValue='3'>
                                    {options}
                                </Input>
                            </Col>
                        </Row>
                    </Col>
                    <Col s={6} className="right-align">
                        <Button onClick={this.props.handler}>Save</Button>
                    </Col>
                </Col>
            </Row>
        );
    }

} 