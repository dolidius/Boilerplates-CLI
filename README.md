# Boilerplates-CLI

Command line interface for creating boilerplates.

![Command line screen](https://i.imgur.com/4oJ8Dj5.png)

### Installation

This CLI requires [Node.js](https://nodejs.org/) to run app locally.

Download the repo by downloading zip or cloning the repo:

```sh
$ git clone https://github.com/dolidius/Boilerplates-CLI.git
```

Install the dependencies and start the server and link the CLI.

```sh
$ cd boilerplates-cli
$ npm install
$ npm link
```

Now you can use this CLI anywhere by typing boilerplates in terminal

```sh
$ boilerplates
```

After that you will get list of boilerplates from "boilerplates" folder and you will be able to choose one and give it a name, and then folder with that name will appear in your current directory.
<br>
<br>
### Adding new boilerplate

To add new boilerplate to CLI, simply add new folder in "boilerplates" folder and it will appear in the CLI with the name of folder name you created.
