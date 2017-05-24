import React from 'react';

import { Row, Col } from 'react-materialize';
import ProfilePicture from '../../../public/img/avatar5.png';

class ImageProfile extends React.Component {

    render() {
        return (
            <Row className="profile">
                <Row>
                    <Col m={4} offset="m4">
                        <img src={ProfilePicture} alt="boohoo" className="circle card-image" />
                    </Col>
                </Row>
                <Row>
                    <Col m={12} className="center-align">
                        <label className="black-text">Admin</label>
                    </Col>
                </Row>
            </Row>
        );
    }

}

export default ImageProfile;