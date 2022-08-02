# Getting Started

## Installation
### Node Version Manager
Install Node Version Manager [(NVM)](https://github.com/nvm-sh/nvm) on your machine, simply run the following command in your terminal.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Once installation is done, restart your terminal to be able to use nvm

Verify Installation
```
command -v nvm
```
You should see `nvm` if all goes well.


Whenever you have restarted your machine or created a new instance of terminal, you will have to run this command to make sure that you will be using the correct version of node and npm.

```
nvm use

```

Install the correct node version in the project directory

```
nvm install
```

### Global Installations
Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
```
npm install -g yarn
```

Check installation
```
yarn --version
```

### Highly recommended
- Install Eslint on your IDE as we're using eslint to enforce code style
- [Set Eslint to auto fix errors on save](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code)
## Environment Variables
### Required for index.ts

# Starting the server
1. Install the required node packages:

```
yarn install
```

2. Build the project:
```
yarn build
```

3. (a) Run the project for **development** with nodemon to listen for concurrent changes:
```
yarn dev
```

3. (b) Run the project for **production** with node
```
yarn start
```
