# e-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

This application allows users to perform CRUD (Create, Read, Update, Delete) actions on a backend database. Database tables include information for products, categories, & tags. Entries can be read, added, updated, or deleted using GET, POST, PUT, & DELETE api calls. This app uses `Sequelize` to create tables & their respective relationships via models. It also utilizes `node.js`, `JavaScript`, `express.js`, `mySQL`,and `dotenv`.

![Walkthrough](assets/images/Walkthrough.gif)

[Link to Walkthrough](https://drive.google.com/file/d/1E5mwD1Px67I0ZH2d9jXgyiJr5QWrG3hU/view)

## Installation

After cloning the repository, install necessary dependencies by adding the following items to you package.json file and running `npm i`:

    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"

NOTE: You may also want to add `node_modules` to your `.gitignore` file to prevent unnecessary library uploads to your repository.

Database Setup:

1. Create the database by running the contents of the `schema.sql` file in `mySQL`.
2. Seed the database by running the contents of the `seeds.sql` file in `mySQL` or running the built-in script `npm run seed`.

## Usage

After pulling down the repository, you must create a`.env` file in the root directory and complete the below required environmental variables you chose when you setup your database.

    DB_HOST=<usually localhost>
    DB_USER=<username to connect to database>
    DB_PASS=<password to connect to database>
    DB_NAME=<name of database>
    DB_PORT=<port to connect to database>

When that is complete, start the app by running `npm start` (or `npm run watch` to automatically refresh the server on save using `nodemon`) in your terminal or CLI. Then, use the arrow keys to select an option and press ENTER. Complete the prompts and continue to choose other options until you are finished. At that time, you can exit the app by choosing QUIT.

## License

This project is licensed under [License: MIT](https://opensource.org/licenses/MIT)

## Contributing

To contribute to this project (or any others), please contact me using the information in the Questions section below or by submitting a pull request.

> For more information on project contribution guidelines, please reference [Contributor Covenant](https://www.contributor-covenant.org/)

## Questions?

If you have any questions, please feel free to reach out. Thanks!

GitHub: https://github.com/matthewbush55

Email: matthewbush55@gmail.com
