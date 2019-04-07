import EmployeeStore from './EmployeeStore';
import TransportLayer from '../TransportLayer'
import WeatherStore from './WeatherStore';

class RootStore {
  constructor() {
    this.employeeStore = new EmployeeStore();
    this.weatherStore = new WeatherStore(new TransportLayer());
  }
}

export default RootStore;