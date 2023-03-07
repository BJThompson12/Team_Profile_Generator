// set required npm's
const inquirer = require('inquirer');
const fs = require('fs');

// import the other js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerQuestionsPrompt = require('./lib/managerQuestions')
const engineerQuestionsPrompt = require('./lib/engineerQuestions')
const internQuestionsPrompt = require('./lib/internQuestions')

// array will be needed to put the answers into
const generatedTeamArray = [];

const newTeamMemberQuestion = [
  {
    type: 'list',
    message: 'Which type of meamber would you like to add to your team?',
    name: 'role',
    choices: ['Engineer', 'Intern', 'Finished']
  }
]

//check prompt inputs using validate method from inquirer
const validateInput = (userInput) => {
  if (userInput === '') {
    // if it is an empty string with no input post a comment
    return "No value entered. Please enter a value.";
  } else return true;
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
  if (!this) {
    return;
  } else {
    // start manager questions with a prompt
    inquirer.prompt(managerQuestionsPrompt)
    .then((answers) => {
      const teamManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      console.log(teamManager);
      generatedTeamArray.push(teamManager)
      addTeamMemeber();
    })
  };
};
const addTeamMemeber = () => {
  inquirer.prompt(newTeamMemberQuestion)
  .then((answer) =>{
    if (answer.role === 'Finished'){
      console.log(generatedTeamArray);
      return;
    } else if (answer.role === 'Engineer') {
      inquirer.prompt(engineerQuestionsPrompt)
      .then((answers) => {
        const EngineerAnswers = new Engineer(answers.name, answers.id, answers.email, answers.github);
        generatedTeamArray.push(Engineer)
        console.log(EngineerAnswers);
        console.log(generatedTeamArray[1]);
        addTeamMemeber();
      })
    } else if (answer.role === 'Intern') {
      inquirer.prompt(internQuestionsPrompt)
      .then((answers) => {
        const InternAnswers = new Intern(answers.name, answers.id, answers.email, answers.school);
        generatedTeamArray.push(Intern);
        console.log(InternAnswers);
        addTeamMemeber();
      })
    }
  })
};
  // will need a function to generate the HTML and write to file
  function generateTeam(){
    
  }
  
  init()
  
  // looping array to generate the html
  for (let peopleObj of generatedTeamArray){
    let name = peopleObj.name
    let employeeId = peopleObj.employeeId
  }
