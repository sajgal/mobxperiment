import React from 'react';
import { inject } from 'mobx-react';

const EmployeeList = props => {
  if (props.employees === undefined || props.employees.length === 0) {
    return <div>Empty</div>
  }

  const list = props.employees.map((employee, index) => {
    return <div key={`emp-${index}`}>
      <b>{employee.name}</b> - desk <b>#{employee.deskId} ({props.deskFloor[employee.deskId]} floor)</b>
    </div>
  });

  return <div>
    {list}
    <button onClick={props.add}>+</button>
  </div>
};

export default inject(stores => ({
  employees: stores.rootStore.employeeStore.employees,
  deskFloor: stores.rootStore.employeeStore.deskFloor,
  add: stores.rootStore.employeeStore.add,
}))(EmployeeList);