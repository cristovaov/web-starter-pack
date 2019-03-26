![npm](https://img.shields.io/npm/v/web-starter-pack.svg?color=blue)
<p align="center">
  <img src="https://raw.githubusercontent.com/cristovaov/web-starter-pack/master/template/static/img/web-starter-pack.png" width="120" height="120" alt="web-starter-pack logo">
</p>

# web-starter-pack

> A cli to start new web projects in seconds

`web-starter-pack` will scaffold a web project for you, with sensible defaults. The joy of traditional web development and modern tooling, without the headache! 

## Usage

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
* *...more to come!*

## Options
You will be asked if you'd like to initialize a git repo (default: No) and have the npm packages already installed (default: Yes).

## Build & Server
After your choices are confirmed, the cli will setup your chosen framework with default configurations for webpack and an express.js server. Follow-up commands will be shown on-screen.

## License

MIT &copy; [Cristovao Verstraeten](https://apleasantview.com)
