// Create Employee Class
class Employee {
  constructor(employeeName, employeeId, employeeEmail){
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
  }

// Create methods to capture the data
// Method tp capture the name 
  getEmployeeName(){
    return this.employeeName;
  }

  // Method to capture employee ID
  getEmployeeId(){
    return this.employeeId;
  }

// Method to capture emplyee email
  getEmployeeEmail(){
    return this.employeeEmail;
  }

// Method to capture the employees role
  getEmployeeRole(){
    return 'Employee';
  }
}

// Export the js file
module.exports = Employee