import React from "react";
import EmployeeComponent from "../Components/EmployeeComponent";
import EmployeesWrapper from "../Components/EmployeesWrapper";
import Pagination from "../../common/Components/Pagination";
import { useFetchEmployees } from "../hooks";
import { titleStyle } from "../../common/styles";

const EmployeesContainer = () => {
  const { employees, requestState } = useFetchEmployees();

  return (
    <Pagination items={employees}>
      {(items) => (
        <div>
          {requestState === "pending" ? (
            <div style={titleStyle}>Chargement en cours...</div>
          ) : null}
          {requestState === "done" ? (
            <EmployeesWrapper>
              {items.map((employee) => (
                <EmployeeComponent employee={employee} />
              ))}
            </EmployeesWrapper>
          ) : null}
          {requestState === "failed" ? (
            <div style={titleStyle}>Erreur lors du chargement des données</div>
          ) : null}
        </div>
      )}
    </Pagination>
  );
};

export default EmployeesContainer;
