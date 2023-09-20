# Frontend GDS App

## Overview

This is a frontend application, built using Express, Nunjucks, and the GOV.UK Design System. It serves as a template for creating scalable and maintainable frontend applications.

## Prerequisites

- Node.js v20.6.1 (specified in `.nvmrc`)
- npm (comes with Node.js)

## Dependencies

- Express
- Nunjucks
- GOV.UK Frontend
- Sass
- EJS
- CORS

## Dev Dependencies

- Nodemon
- Concurrently

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-repo/app1_frontend.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd app1_frontend
    ```

3. **Install Node.js dependencies**

    ```bash
    npm install
    ```

## Running the Application

### Development

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start both the Express server and the Sass compiler in watch mode.

### Viewing the Application

Open your web browser and navigate to:

```
http://localhost:8080
```

## Directory Structure

```
.
├── app.js
├── controllers
├── .gitignore
├── middleware
├── nodemon.json
├── .nvmrc
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   ├── main.css
│   │   └── main.css.map
│   └── js
│       └── govuk.js
├── README.md
├── scss
│   └── main.scss
└── views
    └── root.njk
```
