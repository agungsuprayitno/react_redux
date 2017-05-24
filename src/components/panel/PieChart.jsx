import React from 'react';

import {Pie} from 'react-chartjs-2';

export class PieChart extends React.Component {

    render() {
        return (
            <div>
                <b><center>{this.props.caption}</center></b>
                <Pie data={{
                    labels: this.props.labels,
                    datasets: [
                        {
                            data: this.props.data,
                            backgroundColor: this.props.colors,
                            hoverBackgroundColor: this.props.colors
                        }
                    ]
                }}/>
            </div>
        );
    }

}