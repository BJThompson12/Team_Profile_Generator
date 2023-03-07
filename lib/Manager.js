// import the Employee js
const Employee = require('./Employee')

// create Manager class with Employee class
class Manager extends Employee {
  // include the Employee parameters by using super
  constructor(name, id, email, officeNumber){
  super(name, id, email)
  // create the Manager parameters
  this.officeNumber = officeNumber;
  this.role = 'Manager'
  }

  getRole(){
    return this.role;
  }
  
  getOfficeNumber(){
    return this.OfficeNumber
  }
}

// ecport the Manager.js 
module.exports = Manager