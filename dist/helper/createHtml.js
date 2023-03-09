const inquirer = require('inquirer')
const fs = require('fs');

const html =[];

const generateHtml = (generatedTeamArray) => {
  let data = generatedTeamArray;
  createCards(data);
  let employeeCards = inputData(html.join(''))
  fs.writeFile('./dist/team.html', employeeCards, (error) => {
    if(error){
      console.error(error);
    } else {
      console.log('Team page has been created')
    }
  });
}

const createCards = (data) => {
  
  const createManager = (manager) => {
    const managerHtml = `
    <!-- manager -->
    <li class="shadow-md shadow-gray-500  rounded-b-lg w-64">
    <div class="bg-blue-600 rounded-t-lg text-white font-bold  p-3">
      <h2 class="text-xl block">${manager.name}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6 inline-block">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
      <h2 class="text-lg ml-1 inline-block">Manager</h2>
    </div>
        <div class="border-gray-300 border rounded-md my-8 mx-4 text-xs">
          <div class="border-b border-gray-300 p-2">ID: ${manager.id}</div>
          <div class="p-2">Email: <a href="mailto:${manager.email}">${manager.email}</a></div>
          <div class="p-2">Office number: ${manager.officeNumber}</div>
      </div>
    </li>
    `;
    html.push(managerHtml)
  };

   const createEngineer = (engineer) => {
    const engineerHtml = `
    <!-- Engineer -->
    <li class="shadow-md shadow-gray-500  rounded-b-lg w-64">
    <div class="bg-blue-600 rounded-t-lg text-white font-bold  p-3">
      <h2 class="text-xl block">${engineer.name}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
      <h2 class="text-lg ml-1 inline-block">Engineer</h2>
    </div>
        <div class="border-gray-300 border rounded-md my-8 mx-4 text-xs">
          <div class="border-b border-gray-300 p-2">ID: ${engineer.id}</div>
          <div class="p-2">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div>
          <div class="p-2">Github:<a href="https://${engineer.github}.com/BJThompson12" target="_blank"> ${engineer.github}</a></div>
      </div>
  </li>
    `;
    html.push(engineerHtml);
   }

   const createIntern = (intern) => {
    const internHtml = `
    <li class="shadow-md shadow-gray-500  rounded-b-lg w-64">
    <div class="bg-blue-600 rounded-t-lg text-white font-bold  p-3">
      <h2 class="text-xl block">${intern.name}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
      <h2 class="text-lg ml-1 inline-block">Intern</h2>
    </div>
        <div class="border-gray-300 border rounded-md my-8 mx-4 text-xs">
          <div class="border-b border-gray-300 p-2">ID: ${intern.id}</div>
          <div class="p-2">Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
          <div class="p-2">School: ${intern.school} </div>
      </div>
  </li>
    `;
    html.push(internHtml)
   }

    // Create loop for all employees
    for (let i = 0; i < data.length; i++) {
      if (data[i].getRole() === 'Manager') {
          createManager(data[i]);
      }
      if (data[i].getRole() === 'Engineer') {
          createEngineer(data[i]);
      }
      if (data[i].getRole() === 'Intern') {
          createIntern(data[i]);
      }
    }

    return html;
  }

const inputData = (html) => {
  let finalPAge = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./output.css">
    <title>Team Profile Generator</title>
    
    </head>
    <body>
    <main class="p-1">
    <!-- header container -->
    <header>
    <nav class="header-container h-28 p-7 bg-red-500 text-white border-2">
    <div class="text-center flex justify-center">
      <h1 class="text-center p-4 text-2xl font-semibold">My Team</h1>
    </div>
    </nav>
    </header>
    
    <!-- container for created cards -->
    <div class="container p-10">
      <div class=" p-2 ">
        <ul id="employee-container" class="flex flex-wrap gap-4 justify-center">
    ${html}
    </ul>
    </div>
    </main>
    </body>
    </html> 
  `;
  return finalPAge;
}

module.exports = generateHtml;