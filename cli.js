#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [

  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    default: 'nodejs',
    choices: CHOICES
  },

  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
  }

];

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    createDirectoryContents(templatePath, projectName);
});

function createDirectoryContents (templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);
  
    filesToCreate.forEach(file => {
      const origFilePath = `${templatePath}/${file}`;
      
      // Get stats(informations) about the current file
      const stats = fs.statSync(origFilePath);

      if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        
        const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
        fs.writeFileSync(writePath, contents, 'utf8');
      } else if (stats.isDirectory()) {
        fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
        
        // Recursive to get files that are nested in folders
        createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
      } 

    });
}
