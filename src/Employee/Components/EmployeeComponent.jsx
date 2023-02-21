import React from "react";
import { frameStyle, dataStyle } from "../../common/styles";

const Frame = ({ children }) => <div style={frameStyle}>{children}</div>;

const Data = ({ name, data }) => (
  <div style={dataStyle}>
    {name} : {data}
  </div>
);

const EmployeeComponent = ({ employee }) => {
  return (
    <Frame>
      <Data name={"Name"} data={employee.name} />
      <Data name="Job title" data={employee.job_title} />
      <Data name="Company name" data={employee.company_name} />
    </Frame>
  );
};

export default EmployeeComponent;
