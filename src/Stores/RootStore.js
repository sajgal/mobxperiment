import EmployeeStore from './EmployeeStore';

class RootStore {
  constructor() {
    this.employeeStore = new EmployeeStore(this)
  }
}

export default RootStore;