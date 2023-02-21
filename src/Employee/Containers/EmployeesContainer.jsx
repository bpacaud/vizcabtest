import React from "react";
import { useState, useEffect } from "react";
import EmployeeComponent from "../Components/EmployeeComponent";
import EmployeesWrapper from "../Components/EmployeesWrapper";

const EmployeesContainer = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/employee.json?key=53b1b110"
        );
        const employees = await response.json();
        setEmployees(employees);
      } catch (e) {
        throw e;
      }
    };
    fetchEmployees();
  }, []);

  return (
    /**TODO : on pourrait englober le code ci-dessous dans un composant pour gérer la pagination.
     * On peut stocker dans un state les index à afficher. */
    <EmployeesWrapper>
      {employees.map((employee) => (
        <EmployeeComponent employee={employee} />
      ))}
    </EmployeesWrapper>
  );
};

export default EmployeesContainer;
