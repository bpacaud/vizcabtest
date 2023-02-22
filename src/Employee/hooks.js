import { useState, useEffect } from "react";

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [requestState, setRequestState] = useState("undone");
  useEffect(() => {
    const fetchEmployees = async () => {
      setRequestState("pending");
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/employee.json?key=53b1b110"
        );
        const employees = await response.json();
        setEmployees(employees);
        setRequestState("done");
      } catch (e) {
        throw e;
      }
    };
    fetchEmployees();
  }, []);

  return { employees, requestState };
};
