/**
 * Author: Sami Haddad
 * Date Created: 8/23/2022
 * Last Modified: 8/24/2022
 */

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import Table  from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


export default function Database() {

    const [users, setUsers] = useState(false);
    const backend = "https://pernstack-backend.herokuapp.com";
    // const backend = "localhost:8080/"
    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        fetch(`${backend}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            setUsers(data);
          });
      }

      function createUser() {
        let name = prompt('Enter user name');
        let email = prompt('Enter user email');

        fetch(`${backend}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getUser();
          });
      }

      function deleteUser(id) {
        // let id = prompt('Enter user id');

        fetch(`${backend}/users/${id}`, {
          method: 'DELETE',
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getUser();
          });
      }

      function editUser(id) {
        // let id = prompt('Enter user id');
        let name = prompt('Enter subscriber name');
        let email = prompt('Enter subscriber email');

        // console.log(id);

        fetch(`${backend}/users/${id}`, {
          
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT', 
          body: JSON.stringify({name,email}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getUser();
          });
      }

      let tbl = [
        { id: "1", name: "Anom", email: "Male" },
        { id: "2", name: "Megha", email: "Female" },
        { id: "3", name: "Subham", email: "Male"},
      ];

      function convTable(users) {
        let table = JSON.parse(users);
        tbl = table;
      }

    return (
    <div>
        <h2 className="heading">Database</h2>
        
        
        <br />
        <h3>Table of Users</h3>
        {document.addEventListener('DOMContentLoaded', convTable(users))}
        <div className="table-responsive">
        <Table className="table table-dark">
        <thead>
            <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tbl && tbl.map((val, key) => {
            return (
                <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td className="flex"><Button onClick={() => {deleteUser(val.id)}}>Delete</Button><Button onClick={() => {editUser(val.id)}}>Edit</Button></td>
                </tr>
            )})}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><div className="buttons"><Button onClick={createUser}>Add User</Button></div></td>
            </tr>
        </tbody>
        </Table>
        </div>
    </div>
    )
}
