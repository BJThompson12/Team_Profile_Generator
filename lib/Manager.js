// import the Employee js
const Employee = require('./Employee')

// create Manager class with Employee class
class Manager extends Employee {
  // include the Employee parameters by using super
  constructor(name, id, email, officeNumber){
  super(name, id, email)
  // create the Manager parameters
  this.officeNumber = officeNumber;
  }

  getRole(){
    return 'Manager';
  }
  
  getOfficeNumber(){
    return this.getOfficeNumber
  }
}

// ecport the Manager.js 
module.exports = Manager