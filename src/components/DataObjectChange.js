import React, { useState } from "react";

function DataObjectChange() {
  const defaulUsertData = {
    firstname: "vijay",
    password: "vijay@123",
  };
  const [user, SetUser] = useState(defaulUsertData);

  const handleData = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h5>First Name : {user.firstname}</h5>
      <h5>Password :{user.password}</h5>
      <input type="text" name="firstname" onChange={handleData}></input>
      <input type="text" name="password" onChange={handleData}></input>
    </div>
  );
}

export default DataObjectChange;
