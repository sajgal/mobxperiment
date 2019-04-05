import EmployeeStore from './EmployeeStore';

class RootStore {
  constructor() {
    this.employeeStore = new EmployeeStore()
  }
}

export default RootStore;