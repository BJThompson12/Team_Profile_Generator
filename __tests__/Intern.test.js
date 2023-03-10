//bring in the other files
const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

// Testing object
// test instantiation of Manager
test('Can initiate Intern instance', () => {
  const e = new Intern()
  // e is a new class (object)
  expect(typeof(e)).toBe('object')
})

// test school
test('I can get school via constructor', () => {
  const school = 'Hard Knocks';
  const e = new Intern('Batman', 1906, 'Bats@justice.com', school)
  expect(e.school).toBe(school)
})

// Testing the methods
// getRole() method
test('I can get role via method getRole()', () => {
  const role = 'Intern'
  const e = new Intern('Batman', 1906, 'Bats@justice.com', 1204, 'GSU')
  expect(e.getRole()).toBe(role)
})

test('I can get school via method getSchool()', () => {
  const school = 'Hard Knocks'
  const e = new Intern('Batman', 1906, 'Bats@justice.com', school)
  expect(e.getSchool()).toBe(school)
})
