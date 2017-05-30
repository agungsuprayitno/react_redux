import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import { PieChart } from '../components/panel/PieChart.jsx';
import { BarChart } from '../components/panel/BarChart.jsx';
import Header from '../components/navigation/Header';
import Logo from '../components/panel/Logo.jsx';
import ImageProfile from '../components/panel/ImageProfile.jsx';
import Side from '../components/navigation/Side';

export class Home extends React.Component {

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
            <Row>
              <Col m={4} s={6} l={4} className="center-align">
                <Card className='blue light-1' textClassName='white-text' title='Branch'>100</Card>
              </Col>

              <Col m={4} s={6} l={4} className="center-align">
                <Card className='teal light-1' textClassName='white-text' title='Order'>23</Card>
              </Col>

              <Col m={4} s={6} l={4} className="center-align">
                <Card className='amber light-1' textClassName='white-text' title='Cost'>Rp. 10000000</Card>
              </Col>
            </Row>

            <Row>
              <Col m={6} s={12}>
                <PieChart
                  caption="Cost"
                  labels={["AC", "Plumbing", "Electricity"]}
                  colors={["#FF6384", "#36A2EB", "#FFCE56"]}
                  data={[50, 15, 15]}/>
              </Col>
              <Col m={6} s={12}>
                <PieChart
                  caption="Order"
                  labels={["AC", "Plumbing", "Electricity"]}
                  colors={["#FF6384", "#36A2EB", "#FFCE56"]}
                  data={[5000000, 3000000, 3000000]}/>
              </Col>
              <Col m={12} s={12}>
                <BarChart
                  caption="Order in 2017"
                  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
                  datasets={
                    [
                      {
                        label: "AC",
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                        data: [10, 15, 25, 0]
                      },
                      {
                        label: "Plumbing",
                        backgroundColor: 'rgba(54, 162, 235, 1)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        data: [3, 2, 10, 0]
                      },
                      {
                        label: "Electricity",
                        backgroundColor: 'rgba(255, 206, 86, 1)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1,
                        data: [0, 7, 8, 0]
                      }
                    ]
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>

      );
  }
}
