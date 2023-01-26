import React, { useState, useEffect } from "react";

function EmployeeData() {
  const [emps, setEmps] = useState();
  const url = "https://localhost:44369/api/Employee/GetEmployee";
  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((respnse) => respnse.json())
      .then((data) => setEmps(data));
  }, []);
  return (
    <div>
      {emps &&
        emps.map((emp) => <li key={emp.employeeID}>{emp.employeeName}</li>)}
    </div>
  );
}

export default EmployeeData;
