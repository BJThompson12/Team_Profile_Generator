// require the employee file
const Employee = require('../lib/Employee')

// test the name, id and email

//define test
describe('Can set the name of the Employee', () => {
  test('It should set the name from the input', () => {
    const name = 'Batman';
    const inputName = new Employee(name)
    expect(inputName.name).toBe(name)
  })
})
// describe('test Employee name', () => {
//   test('it should take in an employee name', () => {
//     const employee = new Employee('Brandon');
//     expect(employee.name).toEqual(expect.any(String));
//   })
// });

// describe('test Employee id', () => {
//   test('it should take in an employee id number', () => {
//     const employee = new Employee(1906);
//     expect(employee.id).toEqual(expect.any(Number));
//   })
// });
