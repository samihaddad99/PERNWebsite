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

    const [merchants, setMerchants] = useState(false);
    const backend = "https://pernstack-backend.herokuapp.com/";

    useEffect(() => {
        getMerchant();
    }, []);

    function getMerchant() {
        fetch(`${backend}`)
          .then(response => {
            return response.text();
          })
          .then(data => {
            setMerchants(data);
          });
      }

      function createMerchant() {
        let name = prompt('Enter merchant name');
        let email = prompt('Enter merchant email');

        fetch(`${backend}merchants`, {
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
            getMerchant();
          });
      }

      function deleteMerchant(id) {
        // let id = prompt('Enter merchant id');

        fetch(`${backend}merchants/${id}`, {
          method: 'DELETE',
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getMerchant();
          });
      }

      function editMerchant(id) {
        // let id = prompt('Enter merchant id');
        let name = prompt('Enter merchant name');
        let email = prompt('Enter merchant email');

        // console.log(id);

        fetch(`${backend}merchants/${id}`, {
          
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
            getMerchant();
          });
      }

      let tbl = [
        { id: "1", name: "Anom", email: "Male" },
        { id: "2", name: "Megha", email: "Female" },
        { id: "3", name: "Subham", email: "Male"},
      ];

      function convTable(merchants) {
        let table = JSON.parse(merchants);
        tbl = table;
      }

    return (
    <div>
        <h2 className="heading">Database</h2>
        
        
        <br />
        <h3>Table of Merchants</h3>
        {document.addEventListener('DOMContentLoaded', convTable(merchants))}
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
                <td className="flex"><Button onClick={() => {deleteMerchant(val.id)}}>Delete</Button><Button onClick={() => {editMerchant(val.id)}}>Edit</Button></td>
                </tr>
            )})}
            <tr>
              <td>Add Merchant</td>
              <td></td>
              <td></td>
              <td><div className="buttons"><Button onClick={createMerchant}>Add Merchant</Button></div></td>
            </tr>
        </tbody>
        </Table>
        </div>
    </div>
    )
}
