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

// initialize the application
const init = async () => {
  await inquirer.prompt(managerQuestionsPrompt)
    .then((answers) => {
      const teamManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      console.log(teamManager);
      generatedTeamArray.push(teamManager)
      addTeamMemeber();
    })
};

const addTeamMemeber = () => {
  inquirer.prompt(newTeamMemberQuestion)
  .then((answer) =>{
    if ('Finished'){
      console.log(generatedTeamArray);
      console.log('generate html function will go here');
    } else if (answer.role === 'Engineer') {
      inquirer.prompt(engineerQuestionsPrompt)
      .then((answers) => {
        const EngineerAnswers = new Engineer(answers.name, answers.id, answers.email, answers.github);
        generatedTeamArray.push(EngineerAnswers)
        console.log(EngineerAnswers);
        console.log(generatedTeamArray[1]);
        addTeamMemeber();
      })
    } else if (answer.role === 'Intern') {
      inquirer.prompt(internQuestionsPrompt)
      .then((answers) => {
        const InternAnswers = new Intern(answers.name, answers.id, answers.email, answers.school);
        generatedTeamArray.push(InternAnswers);
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
