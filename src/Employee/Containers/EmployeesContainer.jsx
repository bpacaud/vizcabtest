import React from "react";
import { useState, useEffect } from "react";
import EmployeeComponent from "../Components/EmployeeComponent";
import EmployeesWrapper from "../Components/EmployeesWrapper";
import Pagination from "../../common/Components/Pagination";

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
    <Pagination items={employees}>
      {(items) => (
        <EmployeesWrapper>
          {items.map((employee) => (
            <EmployeeComponent employee={employee} />
          ))}
        </EmployeesWrapper>
      )}
    </Pagination>
  );
};

export default EmployeesContainer;
