import React from "react";

const EmployeesWrapper = ({ children }) => {
  return (
    <div>
      <div style={{ padding: 20 }}>Les employé.es</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: 10,
          marginLeft: 30,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default EmployeesWrapper;
