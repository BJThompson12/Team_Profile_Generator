// set required npm's
const inquirer = require('inquirer');
const fs = require('fs');

// import the other js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array will be needed to put the answers into
const generatedTeamArray = [];
const managerQuestionsArray = [
  {
    type: 'input',
    message: 'What is the team manager\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the team manager\'s employee ID',
    name: 'employeeId',
  },
  {
    type: 'input',
    message: 'What is the team manager\'s email address?',
    name: 'emailAddress',
  },
  {
    type: 'input',
    message: 'What is the team manger\'s Office Number',
    name: 'officeNumber',
  },
]
const newMemberQuestion = [
  {
    type: 'list',
    message: 'Which type of meamber would you like to add to your team?',
    name: 'role',
    choices: ['Engineer', 'Intern', 'Finished']
  }
]
const engineerQuestionsArray = [
  {
    type: 'input',
    message: 'What is your engineer\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your engineer\'s employee ID',
    name: 'employeeId',
  },
  {
    type: 'input',
    message: 'What is your engineer\'s email address?',
    name: 'emailAddress',
  },
  {
    type: 'input',
    message: 'What is your engineer\'s GitHub username?',
    name: 'github',
  },
]
const internQuestionsArray = [
  {
    type: 'input',
    message: 'What is your intern\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your inern\'s employee ID',
    name: 'employeeId',
  },
  {
    type: 'input',
    message: 'What is your intern\'s email address?',
    name: 'emailAddress',
  },
  {
    type: 'input',
    message: 'What school does your intern attend?',
    name: 'school',
  }
]
// inquirer questions 
// questions for Manager on initial start
function promptMemberQuestions(){
  inquirer.prompt(newMemberQuestion)
  .then((answers) =>{
    console.log(answers);
    if (answers.role === 'Engineer') {
      promptEngineerQuestions();
    }
    else if (answers.role === 'Intern') {
      promptInternQuestions();
    }
    else if (answers.role === 'Finished'){
      console.log(generatedTeamArray);
      generateTeam();
      return;
    }
  })
  .catch((error) => {
    console.log(error);
  })
}

// function to prompt engineer questions
function promptEngineerQuestions(){
  inquirer.prompt(engineerQuestionsArray)
  .then((answers) =>{
    // add the role to the object
    answers['role']= 'Manager';
    console.log(answers);
    promptMemberQuestions();
  })
  .catch((error) => {
    console.log(error);
  })
}

//function to prompt intern questions
function promptInternQuestions(){
  inquirer.prompt(internQuestionsArray)
  .then((answers) =>{
    answers['role']= 'Intern';
    console.log(answers);
    generatedTeamArray.push(answers)
    console.log(generatedTeamArray);
    promptMemberQuestions();
  })
  .catch((error) => {
    console.log(error);
  })
}
// initialize the application
function init() {
  inquirer.prompt(managerQuestionsArray)
  .then((answers) =>{
    answers['role']= 'Manager';
    console.log(answers);
    generatedTeamArray.push(answers)
    promptMemberQuestions()
  })
  .catch((error) => {
    console.log(error);
  })
}

// will need a function to generate the HTML and write to file
function generateTeam(){
  
}

init()

// looping array to generate the html
for (let peopleObj of generatedTeamArray){
  let name = peopleObj.name
  let employeeId = peopleObj.employeeId
}
/* 
const questions = async() => {
  const managerAnswers = await inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the team manager\'s employee ID',
        name: 'employeeId',
      },
      {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'emailAddress',
      },
      {
        type: 'input',
        message: 'What is the team manger\'s Office Number',
        name: 'officeNumber',
      },
    ])
    
    // questions for Engineer
    if (managerAnswers.role === 'Engineer'){
      const engineerAnswers = await inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is your engineer\'s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is your engineer\'s employee ID',
          name: 'employeeId',
        },
        {
          type: 'input',
          message: 'What is your engineer\'s email address?',
          name: 'emailAddress',
        },
        {
          type: 'input',
          message: 'What is your engineer\'s GitHub username?',
          name: 'github',
        },
      ])
    }
    // questions for Intern
    if (managerAnswers.role === 'Intern'){
      const internAnswers = await inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is your intern\'s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is your inern\'s employee ID',
          name: 'employeeId',
        },
        {
          type: 'input',
          message: 'What is your intern\'s email address?',
          name: 'emailAddress',
        },
        {
          type: 'input',
          message: 'What school does your intern attend?',
          name: 'school',
        },
      ])
    }
    console.log(managerAnswers);
  }

  //funciton to ask member questions outside of manager questions
  async function promptMemberQuestions(){
    await questions
    
    const promptNewMemberAdd = await inquirer
    .prompt([
      {
        type: 'list',
        message: 'Which type of meamber would you like to add to your team?',
        name: 'role',
        choices: ['Enngineer', 'Intern', 'Finished']
      },
    ])
  }
  */