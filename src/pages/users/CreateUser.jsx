import React from 'react'
import { Row, Col } from 'react-materialize'
import Header from '../../components/navigation/Header'
import Logo from '../../components/panel/Logo'
import ImageProfile from '../../components/panel/ImageProfile'
import Side from '../../components/navigation/Side'

class CreateUser extends React.Component {

  render() {
    return (
      <Row>
        <Header />
        <Col m={3} l={3} s={12}>
          <ul className="side-nav fixed">
            <Logo/>
            <ImageProfile/>
            <Side/>
          </ul>
        </Col>
        <Col m={9} l={9} s={12}>
          <h3>Create New User</h3>

          <div ref="notif_show"> </div>


        </Col>
      </Row>

    );
  }
}

export default CreateUser





