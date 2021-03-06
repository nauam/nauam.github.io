# Documentation

Documentation project.

## Getting starting

### Dependencies

* NVM - Gerenciador de Versões do Node

```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install lts/erbium; nvm use lts/erbium
```

* YARN

```sh
  sudo apt install npm
  sudo npm install --global yarn
```

### Recommended setup steps

Run this before the first you start the docs site locally.

```sh
yarn install
```

### Run the Docs site locally

```sh
yarn run docs:dev
```

> Compiles and hot-reloads for development. As (most) content changes are made they show up immediately.  Changes to the menus will require quitting and restarting with the command above.

### Running in Production

> Compiles and minifies for production.

```sh
yarn run docs:build
```

### Running diretory dist in localhost:8080

1. Have Node.js installed in your system.

2. Navigate to the specific path of your file folder

```sh
npm install http-server -g
http-server
```

3. Go to your browser and type localhost:8080. Your Application should run there.
