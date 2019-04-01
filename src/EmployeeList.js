import React from 'react';

export default props => {
  if (props.employees === undefined) {
    return <div>Empty</div>
  }

  const list = props.employees.map((employee, index) => {
    return <div key={`emp-${index}`}>
      <b>{employee.name}</b> - desk <b>#{employee.deskId}</b>
    </div>
  });

  return <div>
    {list}
  </div>
}