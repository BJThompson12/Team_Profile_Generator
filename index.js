// set required npm's
const inquirer = require('inquirer');
const fs = require('fs');

// import the other js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerQuestionsPrompt = require('./lib/managerQuestions')

// array will be needed to put the answers into
const generatedTeamArray = [];

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

//check prompt inputs using validate method from inquirer
const validateInput = (userInput) => {
  if (userInput === '') {
    // if it is an empty string with no input post a comment
    return "No value entered. Please enter a value.";
  } else return true;
}
// inquirer questions 
// questions for Manager on initial start
/*function promptMemberQuestions(){
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
*/
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
const init = async () => {
  await inquirer.prompt([
    {
      name: 'welcome',
      message: 'Welcome to your Team Generator. Would you like to begin?',
      // default return is a Boolean. True is yes, false if No
      type: 'confirm',
    }
  ])
  console.log(this);
  if (!this) {
    return;
  } else {
    // start manager questions with a prompt
   inquirer.prompt(managerQuestionsPrompt)
   .then((managerAnswers) => {
    const teamManager = new Manager(managerAnswers.name, managerAnswers.employeeId, managerAnswers.emailAddress, managerAnswers.officeNumber);
    console.log(teamManager);
     generatedTeamArray.push(teamManager)
     console.log(generatedTeamArray);
   })
  }
}
/*
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
*/
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