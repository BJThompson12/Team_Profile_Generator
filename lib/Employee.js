// Create Employee Class
class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  }

// Create methods/functions to capture the data
// Method tp capture the name 
  getName(){
    return this.name;
  }

  // Method to capture employee ID
  getId(){
    return this.id;
  }

// Method to capture emplyee email
  getEmail(){
    return this.email;
  }
  
// identifer not part of the data
  getRole(){
    return 'Employee';
  }
}

// Export the js file
module.exports = Employee