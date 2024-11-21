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

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
      fetch(`${backend}/users`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        console.log("Response object:", response);
        return response.text();  // Get the raw body as text
      })
      .then(rawBody => {
        console.log("Raw body as text:", rawBody);  // Log the raw body to check its format
    
        try {
          const parsedData = JSON.parse(rawBody);  // Attempt to parse the JSON
          console.log("Parsed JSON data:", parsedData);
          setUsers(parsedData);  // Pass parsed data to your React state
        } catch (error) {
          console.error("Failed to parse JSON:", error);  // Log any parsing errors
          // Optionally, you can display a default message or handle the error in a different way
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);  // Log any errors from the fetch call
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
            getUsers();
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
            getUsers();
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
            getUsers();
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
