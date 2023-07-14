# Tasks-App
The Task Manager is a web-based application designed to help users effectively manage their tasks. It provides features such as task creation, viewing, updating and marking tasks as completed. The application ensures data integrity by storing tasks in a PostgreSQL database and offers a user-friendly interface.
## Tech Stacks

**DataBase:** PostgreSQL

**Language:** JavaScript

**Library:** React.js v18.2.0

**Environment:** Node.js v20.2.0

**Framework:** Express.js v4.18.2

## Installations

After cloning the repository run the command `npm install` or run the following comands on the terminal

#### Client-Side
```bash
  npm init -y
  npm install react-router-dom axios react-bootstrap bootstrap 
```
#### Server-Side
```bash
  npm init -y
  npm install express pg pg-hstore sequelize express-validators sequelize-cli nodemon dotenv cors bcrypt cookie-parser jsonwebtoken
```
# Front-End

## ROUTES

### Open Routes

```http
   LANDING PAGE: /
   LOGIN PAGE: /login
   REGISTRATION PAGE: /logout
```
### Protected Routes

```http
    /tasks
```
## Folder Structure

The folder structure of the Task Management app is as follows:

```bash
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── EditTask.js
│   │   ├── InputTasks.js
│   │   ├── LandingPage.js
│   │   ├── Listtasks.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── NotFoundPage.js
│   │   ├── Register.js
│   ├── services
│   │   ├── validations
│   │   |   └── emailPwdValidations.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── ProtectedRoute.js
├── .gitignore
├── package.json
└── package-lock.json
```


# Back-End
## USER APIs

### Register USERS

```http
   POST: /users/register
```
| Body Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `username`           | `string`    | **Required**. use to set username   |
| `email`     | `string`    | **Required**. use to set email      |
| `password`          | `string`    | **Required**. use to set password     |
### LOGIN USERS

```http
   POST: /users/login
```
| Body Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `email`     | `string`    | **Required**. use to verify email      |
| `password`          | `string`    | **Required**. use to verify password     |
### LOGOUT USERS

```http
   POST: /users/logout
```
## TASK APIs

### Create TASKS

```http
  POST: /tasks
```
| Body Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `title`           | `string`    | **Required**. to update title   |
| `description`     | `string`    | **Required**. to update description      |
### Get TASKS

```http
  GET: /tasks?status=''&order=''&orderby=''
```

| Query Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `status`           | `string`    | **Optional**. use to filter tasks: Values allowed: complete or pending     |
| `orderby`           | `string` | **Optional**. used to set sort by     |
| `order`          | `string`     | **Optional**. used to set the order for Sorting    |

### UPDATE TASKS

```http
   PATCH: /tasks/updateTask?id=''
```

| Query Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `id`           | `int`    | **Required**. use to set task id   |


| Body Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `title`           | `string`    | **Optional**. to update title   |
| `description`     | `string`    | **Optional**. to update description      |
| `status`          | `string`    | **Optional**. to update status     |

### DELETE TASKS

```http
   DELETE: /tasks?id=''
```

| Query Parameters | Type         | Description                                        |
| :--------------- | :----------- | :------------------------------------------------- |
| `status`           | `string`    | **Required**. use to set task id   |
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`USER_NAME`

`PASSWORD`

`DATABASE`

`HOST`

`DIALECT`

`SECRET`

## Database Schema

### Table: users

| Column    | Type    | Constraints |
| --------- | ------- | ----------- |
| id        | integer | PRIMARY KEY |
| username     | string  |             |
| email     | string  |             |
| password     | string  |             |
| createdAt | date    |             |
| updatedAt | date    |             |

### Table: tasks

| Column      | Type    | Constraints |
| ----------- | ------- | ----------- |
| id          | integer | PRIMARY KEY |
| title       | string  |             |
| description | string  |             |
| status     | string |             |
| createdAt   | date    |             |
| updatedAt   | date    |             |
| userid      | integer | FOREIGN KEY (relates to the Users table, representing the user who created the task) |


## Features

 **User Registration and Authentication:**
- Users can register for an account using their email address and password.
- Registered users can log in to access their task management dashboard.
- JWT (JSON Web Tokens) will be used for secure user sessions.

**Task Management:**
- Users can view their task list, including task titles and descriptions.
- Users can add new tasks, specifying a title and description.
- Users can update a pending task.
- Users can mark tasks as completed or remove tasks from the list.

**Task Filtering and Sorting:**
- Implement filters to allow users to view tasks based on completion status (e.g., all tasks, completed tasks, or incomplete tasks).
- Provide sorting options to order tasks based on creation date or completion status.

## Author

Umer Atiq

- GitHub: [umeratiq99](https://github.com/umeratiq99)