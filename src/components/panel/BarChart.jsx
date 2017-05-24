import React from 'react';

import { Bar } from 'react-chartjs-2';

export class BarChart extends React.Component {

    render() {
        return (
            <div>
                <b><center>{this.props.caption}</center></b>
                <Bar data={{
                    labels: this.props.labels,
                    datasets: this.props.datasets
                }}/>
            </div>
        );
    }

}