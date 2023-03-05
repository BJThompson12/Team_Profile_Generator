// set required npm's
const inquirer = require('inquirer');
const fs = require('fs');

// import the other js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array will be needed to put the answers into
const generatedTeamArray = [];

// inquirer questions 
const questions = async() => {
  const managerAnswers = await inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your Name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your employee ID',
        name: 'employeeId',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
      },
      {
        type: 'input',
        message: 'What is your Office Number',
        name: 'officeNumber',
      },
      {
        type: 'list',
        message: 'Who woudl you like to add to your team?',
        name: 'role',
        choices: ['Enngineer', 'Intern', 'Finished']
      },
    ])
}