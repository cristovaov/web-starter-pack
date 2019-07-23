const superb = require('superb');

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Project name:',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'Project description:',
        default: `My ${superb()} web project`
      },
      {
        name: 'author',
        message: 'Author name:',
        default: '{gitUser.name}',
        store: true
      },
      {
        name: 'frontend',
        message: 'Choose your frontend flavour:',
        type: 'list',
        choices: ['blank', 'Bulma', 'Normalize'],
        default: 'blank',
        filter: val => val.toLowerCase()
      },
      {
        name: 'engine',
        message: 'Choose an engine:',
        type: 'list',
        choices: ['none', 'Eleventy', 'Express'],
        default: 'none',
        filter: val => val.toLowerCase()
      },
      {
        name: 'gitRepo',
        type: 'confirm',
        message: 'Initialize a git repo?',
        default: false
      },
      {
        name: 'installPackages',
        type: 'confirm',
        message: 'Install the node packages?',
        default: true
      }
    ];
  },
  templateData() {
    const serverEngine = this.answers.engine;
    let serverCmd;
    switch (serverEngine) {
      case 'express': {
        serverCmd = 'node server.js';
        break;
      }
      case 'eleventy': {
        serverCmd = 'eleventy --serve';
        break;
      }
      default: {
        serverCmd = serverEngine;
      }
    }

    return {
      serverCmd
    };
  },
  actions() {
    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: 'template/base'
      }
    ];

    if (this.answers.engine !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `template/engines/${this.answers.engine}`
      });
    }

    actions.push({
      type: 'add',
      files: '*'
    });

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json'
      }
    });

    return actions;
  },
  async completed() {
    if (this.answers.gitRepo) {
      this.gitInit();
    }

    if (this.answers.installPackages) {
      await this.npmInstall();
    }

    this.showProjectTips();

    const projectDir = this.outDir !== process.cwd();
    const projectFolder = () => {
      if (projectDir) {
        console.log(`\tcd ${this.outFolder}`);
      }
    };

    console.log(this.chalk.bold(`\n  Next steps:`));
    projectFolder();
    
    if (!this.answers.installPackages) {
      console.log('\tnpm install');
    }

    console.log('\tnpm run build | npm run start (dev)')

    if (this.answers.engine !== 'none') {
      console.log('\tnpm run server');
    }
  }
};
