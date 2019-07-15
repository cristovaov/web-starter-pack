[![npm](https://img.shields.io/npm/v/web-starter-pack.svg?color=blue)](https://www.npmjs.com/package/web-starter-pack) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

<p align="center">
  <img src="https://raw.githubusercontent.com/cristovaov/web-starter-pack/master/template/base/static/img/web-starter-pack.png" width="120" height="120" alt="web-starter-pack logo">
</p>

# web-starter-pack

> A cli to start new web projects in seconds

`web-starter-pack` will scaffold a web project for you, with sensible defaults. The joy of traditional web development and modern tooling, without the headache! 

## Usage ⌨️

With `npx` (recommended):
```bash
npx web-starter-pack <project-folder>
```
With `npm <= 5.1`:
```bash
npm install -g web-starter-pack
web-starter-pack <project-folder>
```

## Front-end flavours 🍦

You have the choice of the following front-end frameworks:
* blank (no front-end framework)
* [Bulma](https://bulma.io)
* [Normalize](https://necolas.github.io/normalize.css/)
* *...more to come!*

## Engines 🌀

What will power your site?
* none (no powers!)
* [Eleventy](https://www.11ty.io/)
* [Express](https://expressjs.com/)

## Options ✔️

You will be asked if you'd like to initialize a git repo (default: No) and have the npm packages installed for you (default: Yes).

## Build 🔧

After the cli has setup your chosen options, follow-up commands will be shown on-screen! The template comes with separate [webpack](https://webpack.js.org/guides/production/) configurations for building your SASS/(S)CSS and JavaScript in development and production mode.

## License

MIT &copy; [Cristovao Verstraeten](https://apleasantview.com)
