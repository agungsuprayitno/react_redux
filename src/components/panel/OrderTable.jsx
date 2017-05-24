import React from 'react';

import { Table } from 'reactable';

export class OrderTable extends React.Component {

    render() {
        return (
            <Table
                className="table highlight responsive-table"
                id="table"
                data={this.props.data}
                itemsPerPage={25}
                pageButtonLimit={10}
                sortable={[
                    {
                        column: 'Order_Id',
                        sortFunction: function (a, b) {
                            // Sort by last name
                            var nameA = a.split(' ');
                            var nameB = b.split(' ');

                            return nameA[1].localeCompare(nameB[1]);
                        }
                    },
                    'Order Id',
                    'Created date',
                    'Schedule date',
                    'Username',
                    'Vendor',
                    'Security code',
                    'Internal Notes',
                    'External Notes',
                    'Type',
                    'Time'
                ]}
                defaultSort={{column: 'Age', direction: 'desc'}}
                filterable={[
                    {
                        column: 'Name',
                        filterFunction: function (contents, filter) {
                            // case-sensitive filtering
                            return (contents.indexOf(filter) > -1);
                        }
                    },
                    'Order Id',
                    'Type',
                    'Time'
                ]}
                noDataText="No matching records found."
            >
            </Table>
        );
    }

} 