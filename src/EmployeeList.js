import React from 'react';
import { observer } from 'mobx-react';

export default observer(['rootStore'], props => {
  const employees = props.rootStore.employeeStore.employees;
  const deskFloor = props.rootStore.employeeStore.deskFloor;

  if (employees === undefined || employees.length === 0) {
    return <div>Empty</div>
  }

  const list = employees.map((employee, index) => {
    return <div key={`emp-${index}`}>
      <b>{employee.name}</b> - desk <b>#{employee.deskId} ({deskFloor[employee.deskId]} floor)</b>
    </div>
  });

  return <div>
    {list}
    <button onClick={props.rootStore.employeeStore.add}>+</button>
  </div>
});