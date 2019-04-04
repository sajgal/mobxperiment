import './App.css';
import { observable, configure, action } from 'mobx';
import DevTools from 'mobx-react-devtools';
import EmployeeList from './EmployeeList';
import React from 'react';
import Store from './Stores/AppStore';

configure({ enforceActions: "always" });

const appState = observable({
  employees: Store.employees,

  add: action('add employee', () => {
    appState.employees = [
      ...appState.employees,
      Store.createFakeEmployee(),
    ]
  }),

  get deskFloor() {
    const deskFloor = [];

    appState.employees.forEach(employee => {
      deskFloor[employee.deskId] = (employee.deskId < 50) ? 'first' : 'second';
    });

    return deskFloor;
  },
});

const App = () => (
  <div className="App">
    <EmployeeList state={appState} />

    <DevTools />
  </div>
);

export default App;
