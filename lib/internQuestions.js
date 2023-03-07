// set require on npm
const inquirer = require('inquirer')

const internQuestionsArray = [
  {
    type: 'input',
    message: 'What is your intern\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your inern\'s employee ID',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your intern\'s email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What school does your intern attend?',
    name: 'school',
  }
]

//export the file 
module.exports = internQuestionsArray