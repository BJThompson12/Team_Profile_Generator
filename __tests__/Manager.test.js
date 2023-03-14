//bring in the other files
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

// Testing object
// test instantiation of Manager
test('Can initiate Manager instance', () => {
  const e = new Manager()
  // e is a new class (object)
  expect(typeof(e)).toBe('object')
})

// test officeNumber
test('I can get office Number via constructor', () => {
  const officeNumber = 6781241906;
  const e = new Manager('Batman', 1906, 'Bats@justice.com', officeNumber)
  expect(e.officeNumber).toBe(officeNumber)
})

// Testing the methods
// getRole()
test('I can get role via method getRole()', () => {
  const role = 'Manager'
  const e = new Manager('Batman', 1906, 'Bats@justice.com', 1204)
  expect(e.getRole()).toBe(role)
})

test('I can get officeNumber via method getOfficeNumber()', () => {
  const officeNumber = 26781241906;
  const e = new Manager('Batman', 1906, 'Bats@justice.com', officeNumber)
  expect(e.getOfficeNumber()).toBe(officeNumber)
})