//bring in the other files
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

// Testing object
// test instantiation of Manager
test('Can initiate Engineer instance', () => {
  const e = new Engineer()
  // e is a new class (object)
  expect(typeof(e)).toBe('object')
})

// test github
test('I can get gitHub via constructor', () => {
  const gitHub = 'batty22';
  const e = new Engineer('Batman', 1906, 'Bats@justice.com', gitHub)
  expect(e.github).toBe(gitHub)
})

// Testing the methods
// getRole() method
test('I can get role via method getRole()', () => {
  const role = 'Engineer'
  const e = new Engineer('Batman', 1906, 'Bats@justice.com', 1204, 'batty22')
  expect(e.getRole()).toBe(role)
})

test('I can get gitHub username via method getGitHub()', () => {
  const username = 'batty22'
  const e = new Engineer('Batman', 1906, 'Bats@justice.com', username)
  expect(e.getGithub()).toBe(username)
})