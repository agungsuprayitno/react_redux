import React from 'react';
import { Row, Col } from 'react-materialize';
import LogoCompany from '../../../public/img/Danamon.png';

 class Logo extends React.Component {

    render() {
        return (
            <Row className="logo">
                <Col m={12}>
                    <img src={'http://placehold.it/400x100'} alt="boohoo" className="logo" />
                </Col>
            </Row>
        );
    }

}

export default Logo;