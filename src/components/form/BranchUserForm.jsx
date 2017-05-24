import React from 'react';

import { Row, Input } from 'react-materialize';

export class BranchUserForm extends React.Component {

    render() {
        var options = this.props.users.map((user) => <option value={user.id}>{user.Name}</option>);
        return (
            <div>
                <Row>
                    <Input s={12} type="select" label="User" defaultValue="">
                        <option value="" disabled>Choose user</option>
                        {options}
                    </Input>
                </Row>
            </div>
        );
    }

}