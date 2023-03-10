// require the employee file
const Employee = require('../lib/Employee')

// test the name, id and email
  test('Can initiate Employee instance', () => {
    const e = new Employee()
    // e is a new class (object)
    expect(typeof(e)).toBe('object')
  })

//define test
// describe('Can set the name of the Employee', () => {
  test('I can get name via constructor', () => {
    const name = 'Batman';
    const e = new Employee(name)
    expect(e.name).toBe(name)
  })

  // build up in the test you must have the name to get the id
  test('I can get id via constructor', () => {
    const id = 1906;
    const e = new Employee('Batman',id)
    expect(e.id).toBe(id)
  })
  
// test for email
test('I can get email via constructor', () => {
  const email = 'batman@justiceleague.com';
  const e = new Employee('Batman',1906, email)
  expect(e.email).toBe(email)
})

// Testing the methods
test('I can get name via method getName()', () => {
  const name = 'Batman';
  const e = new Employee(name)
  expect(e.getName()).toBe(name)
})

test('I can get id via method getId()', () => {
  const id = 1906;
  const e = new Employee('Batman',id)
  expect(e.getId()).toBe(id)
})

test('I can get name email method getEmail()', () => {
  const email = 'batman@justiceleague.com';
  const e = new Employee('Batman', 1906, email)
  expect(e.getEmail()).toBe(email)
})