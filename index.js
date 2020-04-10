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

inquirer.prompt( {
    type: "input",
    name: "username",
    message: "What is your Github username?"
  })

  .then(function({ username }) {
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
      
  });

  
  

  

  


  //var filename = "Readme.md"
  //var md = `${data.name}`
  
 

  //fs.writeFile(filename, md, function(err) {

    //if (err) {
    //  return console.log(err);
   // }

    //console.log("Success!");

  //});
//});