import React from 'react';

import { Row, Col } from 'react-materialize';

import {Logo} from '../panel/Logo.jsx';
import {ImageProfile} from '../panel/ImageProfile.jsx';
import Header from '../navigation/Header.jsx';
import Side from '../navigation/Side.jsx';
import { Footer } from 'react-materialize';

class MainLayout extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col m={3} l={3} s={12}>
                        <ul className="side-nav fixed">
                            <Logo/>
                            <ImageProfile/>
                            <Side/>
                        </ul>
                    </Col>
                    <Col m={9} l={9} s={12} className="no-padding">
                        <Header/>
                        {this.props.children}
                        <Footer copyrights="Dashboard Klik Tukang &copy; 2015-2016" className='amber darken-3' />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default MainLayout;