# To-Do App | My First MERN Project

## Overview

This is my first MERN-style full-stack To-Do application built using React, Node.js, Express.js, and MongoDB Atlas.

The application allows users to create, view, update, and delete tasks while storing data permanently in MongoDB Atlas.

## Features

* Add new tasks
* View all tasks
* Edit existing tasks
* Delete tasks
* REST API integration
* MongoDB Atlas database connectivity
* Responsive user interface
* Full CRUD operations

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

## Project Structure

```text
Todo-backend/
│
├── Backend/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the Backend folder:

```env
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

### Get All Tasks

```http
GET /tasks
```

### Create Task

```http
POST /tasks
```

### Update Task

```http
PUT /tasks/:id
```

### Delete Task

```http
DELETE /tasks/:id
```

## Learning Outcomes

Through this project, I learned:

* React component architecture
* State management using Hooks
* REST API development
* Express.js routing
* MongoDB Atlas integration
* CRUD operations
* Git and GitHub workflow
* Full-stack application development

## Author

Tejaswi Thathuri

## Project Title

To-Do App — My First MERN Project
