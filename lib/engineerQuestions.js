// set require on npm
const inquirer = require('inquirer')

const engineerQuestionsArray = [
  {
    type: 'input',
    message: 'What is your engineer\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your engineer\'s employee ID',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your engineer\'s email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your engineer\'s GitHub username?',
    name: 'github',
  },
];

//export the file 
module.exports = engineerQuestionsArray