import React, { useState, useCallback } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Title from "./Title";

function ParentComponent() {
  const [age, SetAge] = useState(5);
  const [salary, setSalary] = useState(5000);
  const incrementAge = useCallback(() => {
    SetAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Counter text="Age" count={age} />
      <Button handleClick={incrementAge}>increment Age</Button>
      <Counter text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
