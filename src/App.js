import './App.css';
import { observable, configure, action } from 'mobx';
import DevTools from 'mobx-react-devtools';
import EmployeeList from './EmployeeList';
import React from 'react';
import Store from './Stores/AppStore';

configure({ enforceActions: "always" });

const appState = observable({
  employees: Store.employees,

  add: action(() => {
    appState.employees = [
      ...appState.employees,
      Store.createFakeEmployee(),
    ]
  }),
});

const App = () => (
  <div className="App">
    <EmployeeList state={appState} />
    <DevTools />
  </div>
);

export default App;
