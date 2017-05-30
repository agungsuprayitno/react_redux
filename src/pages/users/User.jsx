import React from 'react'
import { Row, Col } from 'react-materialize'
import Header from '../../components/navigation/Header'
import Logo from '../../components/panel/Logo'
import ImageProfile from '../../components/panel/ImageProfile'
import Side from '../../components/navigation/Side'
import { connect } from 'react-redux'
import {fetchUser} from '../../redux/actions/UserActions'
import { Table } from 'reactable';

class User extends React.Component {

  componentWillMount(){
    this.props.dispatch(fetchUser())
  }

  render() {
    //console.log(this.props);

    const { users } = this.props;
    // const mappedUser = users.users.map((user, i) => {Name: user.email});
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
      //console.log(user[i]);
    }


    // if(!mappedUser.length){
    //   return <Preloader size='big'/>
    // }
     //console.log(mappedUser);

    if(users.fetching === true ){
      this.refs.notif_show.innerHTML = '<div class="col m12 s12"><div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div>';
      //console.log(auth.error)

    }

    if(users.fetched === true || users.error !== null){
      this.refs.notif_show.innerHTML = '';
     // console.log(usersData)
    //  this.refs.content_data.innerHTML = mappedUser.toString()
    }
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
        </Col>
      </Row>

    );
  }
}

export default connect((store) => {
  return {
    users: store.users
  }
})(User)





