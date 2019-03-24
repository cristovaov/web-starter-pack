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
        default:
          this.gitUser.username.toLowerCase() ||
          this.gitUser.name.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'Author email:',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'Website URL:',
        default({ username }) {
          return `github.com/${username}`;
        },
        store: true
      },
      {
        name: 'frontend',
        message: 'Choose your frontend flavour:',
        type: 'list',
        choices: ['blank'],
        default: 'blank',
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
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json'
      }
    }
  ],
  async completed() {
    if (this.answers.gitRepo) {
      this.gitInit();
    }

    if (this.answers.installPackages) {
      await this.npmInstall();
    }

    this.showProjectTips();
  }
};
