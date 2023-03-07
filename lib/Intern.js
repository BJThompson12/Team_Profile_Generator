// import the Employee.js file
const Employee = require('./Employee');

// create Engineer class and add the employee js
class Intern extends Employee {
  constructor (name, id, email, school){
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }

  getRole(){
    return this.role;
  }

  getSchool(){
    return this.school;
  }
}

// epport the Intern.js file
module.exports = Intern;