import React from "react";
import EmployeeComponent from "../Components/EmployeeComponent";
import EmployeesWrapper from "../Components/EmployeesWrapper";
import Pagination from "../../common/Components/Pagination";
import { useFetchEmployees } from "../hooks";

const EmployeesContainer = () => {
  const { employees, requestState } = useFetchEmployees();

  return (
    <Pagination items={employees}>
      {(items) => (
        <div>
          {requestState === "pending" ? (
            <div style={{ paddingTop: 20 }}>"Chargement en cours..."</div>
          ) : null}
          {requestState === "done" ? (
            <EmployeesWrapper>
              {items.map((employee) => (
                <EmployeeComponent employee={employee} />
              ))}
            </EmployeesWrapper>
          ) : null}
        </div>
      )}
    </Pagination>
  );
};

export default EmployeesContainer;
