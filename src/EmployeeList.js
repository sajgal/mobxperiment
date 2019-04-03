import React from 'react';
import { observer } from 'mobx-react';

export default observer(props => {
  if (props.state.employees === undefined) {
    return <div>Empty</div>
  }

  const list = props.state.employees.map((employee, index) => {
    return <div key={`emp-${index}`}>
      <b>{employee.name}</b> - desk <b>#{employee.deskId}</b>
    </div>
  });

  return <div>
    {list}
    <button onClick={props.state.add}>+</button>
  </div>
});