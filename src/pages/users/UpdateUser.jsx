import React from 'react'
import { Row, Col, Input, Button } from 'react-materialize'

class UpdateUser extends React.Component {

  render() {
    return (
      <Row>
        <h3>Update User</h3>

        <div ref="notif_show"> </div>

        <Row>
          <Col s={8} offset="s2">
            <Row>
              <Input s={6} label="First Name" ref="firstname" validate />
              <Input s={6} label="Last Name" ref="lastname" validate />
              <Input s={12} label="Email" ref="email" validate type='email' />
              <Input s={12} label="Phone" ref="phone" validate type='tel' />
              <Input s={12} label="User Code" ref="usercode" validate />
              <Button waves='light' s={2} className="light-blue darken-1">Submit</Button>
            </Row>
          </Col>
        </Row>

      </Row>

    );
  }
}

export default UpdateUser





