import React, { useState, useEffect } from "react";
import EmployeeData from "./EmployeeData";

function EmployeeSaveData() {
  const [data, setData] = useState([]);
  const url = "https://localhost:44369/api/Employee/AddEmployee";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const parameters = {
    employeeID: 0,
    employeeName: "Sana",
    department: "development",
    emailId: "vijay@gmail.com",
    doj: "2022-10-16T00:00:00",
  };

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(parameters),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <EmployeeData />
    </div>
  );
}

export default EmployeeSaveData;
