import React from 'react';

import { Table } from 'reactable';

export class BranchUserList extends React.Component {

    render() {
        return (
            <Table
                className="table responsive-table highlight"
                id="table"
                data={this.props.users}
                itemsPerPage={25}
                pageButtonLimit={5}
                noDataText="No matching records found."
            />
        );
    }

} 