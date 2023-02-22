import { useState, useEffect } from "react";

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [requestState, setRequestState] = useState("undone");
  useEffect(() => {
    const fetchEmployees = async () => {
      setRequestState("pending");
      // On pourrait extraire et mutualiser la logique de fetch et de gestion d'erreur ici.
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/employee.json?key=53b1b110"
        );
        if (response.status === 200) {
          const employees = await response.json();
          setEmployees(employees);
          setRequestState("done");
        } else {
          setRequestState("failed");
        }
      } catch (e) {
        setRequestState("failed");
        //throw e;
      }
    };
    fetchEmployees();
  }, []);

  return { employees, requestState };
};
