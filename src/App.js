import React from 'react';
import Store from './Stores/AppStore';
import EmployeeList from './EmployeeList';
import { observable } from 'mobx';
import './App.css';

const appState = observable({
  employees: Store.employees,

  add: () => {
    appState.employees = [
      ...appState.employees,
      Store.createFakeEmployee(),
    ]
  },
});

const App = () => (
  <div className="App">
    <EmployeeList state={appState} />
  </div>
);

export default App;
