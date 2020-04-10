//const questions = [

//];

//function writeToFile(fileName, data) {
//}

//function init() {

//}

//init();

var inquirer = require("inquirer");
const axios = require("axios");
var fs = require('fs');


inquirer.prompt( [{
    type: "input",
    name: "username",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "title",
    message: "Please enter a title for your new project"
  },
  {
    type: "input",
    name: "description",
    message: "Add a description for your new project"
  },
  {
    type: "input",
    name: "contribute",
    message: "Who is contributing to this project?"
  },
  {
    type: "input",
    name: "license",
    message: "What is the license on this project?"
  },
  {
    type: "input",
    name: "install",
    message: "How would you like to install this project?"
  },
  {
    type: "input",
    name: "contents",
    message: "Enter your table of contents here:"
  },
  {
    type: "input",
    name: "test",
    message: "How are you testing your project?"
  },
  {
    type: "input",
    name: "questions",
    message: "Are there any common questions about this project?"
  },
  {
    type: "input",
    name: "answers",
    message: "Write your answer to the common questions here."
  },
  
  

  
  
]).then(function(data) {

    var filename = "readMeOutput.md"
    var md = `
    
  
      #TITLE

      ${data.title}
  
      ##Description:
      ${data.description}
  
      ##Collaborators
      Team lead: ${data.username}
      Team members: ${data.contribute}

      ##Table of Contents
      ${data.contents}

      ##Installation
      This project was installed using the following method: ${data.install}

      ##Testing
      This project was testing using the following methods: ${data.test}

      ##Common Q&A's
      Questions: ${data.questions}

      Answers: ${data.answers}

      ##Licensing
      ${data.license}


      Auto-generated readme file courtesy of jdstroup10
    `
  
    fs.writeFile(filename, md, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });

  

  /*.then(function({ username }) {
    const GithubURL = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(GithubURL).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("readme.md", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

       // console.log(`Saved ${repoNames.length} repos`);
      });
    });
    inquirer.prompt( {
        type: "input",
        name: "username",
        message: "What Repo do you want to look at?"
      }) 
      
  }); */

  
  

  

  


  //var filename = "Readme.md"
  //var md = `${data.name}`
  
 

  //fs.writeFile(filename, md, function(err) {

    //if (err) {
    //  return console.log(err);
   // }

    //console.log("Success!");

  //});
//});