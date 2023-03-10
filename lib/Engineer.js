// import the Employee.js file
const Employee = require('./Employee');

// create Engineer class and add the employee js
class Engineer extends Employee {
  constructor (name, id, email, github){
    super(name, id, email);
    this.github = github
   // this.role = 'Engineer'
  }

  // set the Engineer role
  getRole(){
    return 'Engineer';
  }

  getGithub(){
    return this.github;
  }
}

// epport the Intern.js file
module.exports = Engineer;