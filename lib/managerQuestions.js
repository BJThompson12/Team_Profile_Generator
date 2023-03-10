// set require on npm
const inquirer = require('inquirer')

// create function to prompt manager questions
const managerQuestionsArray = 
  [
    {
      type: 'input',
      message: 'What is the team manager\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the team manager\'s employee ID',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the team manager\'s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the team manger\'s Office Number',
      name: 'officeNumber',
    },
  ];

//export the file 
module.exports = managerQuestionsArray