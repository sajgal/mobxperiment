import faker from 'faker';

class Store {
  employees = [];

  constructor() {
    for (let index = 0; index < 3; index++) {
      this.employees.push(this.createFakeEmployee());
    }
  }

  createFakeEmployee() {
    return {
      name: faker.name.firstName(),
      deskId: faker.random.number(90),
    }
  }
}

export default new Store();