import React from 'react'
import { Row, Col } from 'react-materialize'

import { connect } from 'react-redux'
import {fetchUser} from '../../redux/actions/UserActions'
import { Table } from 'reactable';

class MainUser extends React.Component {

  componentWillMount(){
    this.props.dispatch(fetchUser())
  }

  render() {
    const { users } = this.props;
    const user = users.users;
    let dataUser = [];
    for (let i in user) {
      let id = user[i].id;
      let username = user[i].username;
      let email = user[i].email;
      let phone = user[i].phone;
      let code = user[i].usercode_id;
      let created_at = user[i].created_at;
      dataUser.push({
        'Id': id,
        'Username': username,
        'Email': email,
        'Phone': phone,
        'User Code': code,
        'Created Date': created_at,
      });
    }

    if(users.fetching === true ){
      this.refs.notif_show.innerHTML = '<div class="col m12 s12"><div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div>';
    }

    if(users.fetched === true || users.error !== null){
      this.refs.notif_show.innerHTML = '';
    }
    return (
      <Row>

          <h3>Users</h3>
          <Col m={3}>
            <a href="/users/create" className="waves-effect waves-light btn">Add New User</a>
          </Col>
          <div ref="notif_show"> </div>
          <Table
            className="table striped highlight"
            id="table"

            data={dataUser}
            itemsPerPage={10}
            pageButtonLimit={5}
            sortable={[
              {
                column: 'Username',
              },
              'Id',
              'Username',
              'Email',
              'Phone',
              'User Code',
              'Created Date'
            ]}
            defaultSort={{column: 'Id', direction: 'desc'}}
            filterable={[
              {
                column: 'Username',
                filterFunction: function (contents, filter) {
                  // case-sensitive filtering
                  return (contents.indexOf(filter) > -1);
                }
              },
              'Id',
              'Username',
              'Email',
              'Phone',
              'User Code',
              'Created Date'
            ]}
            noDataText="No matching records found."
          />
      </Row>
    );
  }
}

export default connect((store) => {
  return {
    users: store.users
  }
})(MainUser)