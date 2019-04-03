import faker from 'faker';

class Store {
  employees = [
    {name: "Matej", deskId: 23},
    {name: "Bruce", deskId: 12},
    {name: "Sam", deskId: 76},
  ]

  createFakeEmployee() {
    return {
      name: faker.name.firstName(),
      deskId: faker.random.number(90),
    }
  }
}

export default new Store();