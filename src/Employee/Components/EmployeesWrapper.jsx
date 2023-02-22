import React from "react";
import { titleStyle } from "../../common/styles";

const EmployeesWrapper = ({ children }) => {
  return (
    <div>
      <div style={titleStyle}>Les employé.es</div>
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
