## Description:

Back-end boilerplate for authentication using email and password

## Technologies:

- TypeScript, Express
- MongoDB, Mongoose
- Passport.js

## Available APIs:

###  /users/
- GET: /users/, /users/:email
- PUT: /users/

###  /auth/
- POST: /auth/signup, /auth/signin

## Installing:

### `git clone https://github.com/caduong97/authentication-boilerplate.git`

To clone the project.

At root directory, run the commands

### `touch .env`

To create .env file to store environment variables. 

Create database, then in database access, set up a user with admin right.

Copy the following lines and paste to .env file, replace the values with your database infos respectively. 

**.env**
```
DEV_PORT=3000 

DEV_DB_URL=<YOUR_DEV_DATABSE_URL>
DEV_DB_USERNAME=<YOUR_ADMIN_USERNAME>
DEV_DB_PASSWORD=<YOUR_ADMIN_PASSWORD>
DEV_DB_NAME=<DATABASE_NAME>

````

### `yarn dev`

To run nodemon

###  Postman

Open postman to test APIs via localhost port 3000

