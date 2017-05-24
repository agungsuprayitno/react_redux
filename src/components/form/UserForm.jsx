import React from 'react';

import { Row, Input } from 'react-materialize';

export class UserForm extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Input label="Username" placeholder="Username" s={6}/>
                </Row>
                <Row>
                    <Input label="Name" placeholder="Name" s={6}/>
                    <Input label="Email" placeholder="Email" s={6}/>
                </Row>
                <Row>
                    <Input label="Phone" placeholder="Phone" s={6}/>
                    <Input type="select" label="Role" s={6}>
                        <option value="" disabled selected>Choose role</option>
                        <option value="1">Administrator</option>
                        <option value="2">Manager</option>
                        <option value="3">Approval</option>
                        <option value="4">Admin Staff</option>
                    </Input>
                </Row>
            </div>
        );
    }

}
