import React, { useState, useEffect } from "react";
import axios from "axios";

function HookUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState();

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   }, []);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>useEffect data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {users && users.map((user) => <li key={user.id}>{user.name}</li>)} */}
    </div>
  );
}

export default HookUsers;
